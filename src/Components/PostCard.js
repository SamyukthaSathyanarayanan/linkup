import "./PostCardStyle.css";

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faShareNodes} from '@fortawesome/free-solid-svg-icons';
import { getFormatDate } from "../Utils/getFormattedData";
import { useContext } from "react";
import { UserContext } from "../Context/UserProvider";
import { addLike, doDislike } from "../Services/likeServices";
import { PostContext } from "../Context/PostProvider";
import { checkIfLikedByUser } from "../Utils/checkLike";
import { AuthContext } from "../Context/AuthProvider";
import { checkBookMarked } from "../Utils/checkBookMark";
import { addBookMark, removeBookMark } from "../Services/bookMarkServices";

export function PostCard({singlePost}){
  const {userState,dispatchUser} = useContext(UserContext);
  const {postState,dispatchPost} = useContext(PostContext);
  const postUser = userState.allUsers.find(user => user.username === singlePost?.username);
  const {user} = useContext(AuthContext);
  const token = localStorage.getItem("token");
  

    return (
    <div className="post-card"> 
    <div className="post-top">
        <img src={postUser?.profileImg} alt="loading-profile-img" className="post-card-img"/> 
        <div className="post-names">
          <p className="user-fullname">{postUser?.firstName} {postUser?.lastName}</p>
          <p className="username">{singlePost?.username}</p>
        </div>
        <div className="createdDate">{getFormatDate(singlePost?.createdAt)}
        </div>
     </div>
     <p>{singlePost?.content}</p> 
     <div className="icons-individual-post">
     {!checkIfLikedByUser(postState?.posts,singlePost?._id,user?.username)  &&  <i onClick={()=>addLike(singlePost?._id,token,dispatchPost)} class="fa-regular fa-heart" />}
     {checkIfLikedByUser(postState?.posts,singlePost?._id,user?.username)  &&  <i onClick={()=>doDislike(singlePost?._id,token,dispatchPost)} class="fa-solid fa-heart"></i>}
        <i class="fa-regular fa-comment"></i>
        <Link to="/" className="icons-post"><FontAwesomeIcon icon={faShareNodes} /></Link>
        {!checkBookMarked(userState.bookMarks,singlePost?._id) ? <i onClick={()=>addBookMark(singlePost?._id,token,dispatchUser)} class="fa-regular fa-bookmark"></i>
        : <i onClick={()=>removeBookMark(singlePost?._id,token,dispatchUser)} class="fa-solid fa-bookmark"></i>}
     </div>
     

      

    </div>
    )
}


