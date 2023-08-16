import { useContext } from "react";
import { UserContext } from "../Context/UserProvider";
import "./RightStyle.css"
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";
import { doFollow } from "../Services/UserServices";
  
  export function Right(){
    const {userState} = useContext(UserContext);
   
    const {user,setUser} = useContext(AuthContext);
    const token = localStorage.getItem("token");
    const navigate = useNavigate();
    const followingUsers = user?.following?.map(({username})=>username);
    const displayUsers = userState?.allUsers.reduce((initVal,current)=>!followingUsers?.includes(current?.username)?[...initVal,current]:initVal,[])
    return(
      <div className="right-home">
      <h1 className="whotofollow">Who to Follow? </h1>
      {displayUsers.map(({ _id, username, firstName, lastName, profileImg }) => (
        <div className="user-container">
          <img src={profileImg} alt="user img loading" className="user-image-right" />
          <div onClick={()=>navigate(`/individualProfile/${username}`)}   className="name-container">
            <span>{firstName} {lastName}</span>
            <span>@{username}</span>
          </div>
          <button className="btn-follow" onClick={() => doFollow(_id, token, setUser)}>Follow</button>
        </div>
      ))}
    </div>
    )
  }