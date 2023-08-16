import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import { PostCard } from "../../Components/PostCard";
import { useParams } from "react-router-dom";
import { UserContext } from "../../Context/UserProvider";
import { PostContext } from "../../Context/PostProvider";
import { doFollow, doUnfollow } from "../../Services/UserServices";

export function IndividualProfile()
{
  const {userName} = useParams();
  const {userState} = useContext(UserContext);
  const {postState} = useContext(PostContext);
  const token = localStorage.getItem("token");
  const {user,setUser} = useContext(AuthContext);
  const reqdUser = userState?.allUsers?.find(({username})=>username===userName);
    const userPosts = postState?.posts?.filter(({username})=>username===userName);

    const checkFollowing = (userId) =>{
      return user?.following?.find(({_id})=>_id===userId)?true:false;
  }
  console.log(reqdUser)
  return (  
        <div className="profile-container">
            <div className="profile-info">
                <img className="profile-img" src={reqdUser?.profileImg} alt="profile"/>              
                <div className="user-details">
                        <div className="user-fullName">{reqdUser?.firstName} {reqdUser?.lastName}</div>
                        <div className="user-username">@{reqdUser?.username}</div>
                        <div className="user-bio">{reqdUser?.bio}</div>
                
                   
            
                    <div className="user-stats">
                        <div><b>{userPosts?.length} Posts</b></div>
                        <div><b>{reqdUser?.followers?.length} Followers</b></div>
                        <div><b>{reqdUser?.following?.length} Following</b></div>
                    </div>
                    </div>
                    {!checkFollowing(reqdUser?._id) &&  <button className="sort-btn" onClick={()=>doFollow(reqdUser?._id,token,setUser)}>Follow</button>}
                    {checkFollowing(reqdUser?._id) && <button className="sort-btn" onClick={()=>doUnfollow(reqdUser?._id,token,setUser)}>Unfollow</button>}
                
                </div>
            
            <div>{userPosts?.map((postObj)=>
            <div>
                <PostCard singlePost={postObj}/>
            </div>
        )}</div>
        </div>

 





)

}