import React, { useContext, useState } from 'react';
import "./UserPostStyle.css" 
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faShareNodes} from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../Context/UserProvider';
import { checkBookMarked } from '../Utils/checkBookMark';
import { addBookMark, removeBookMark } from '../Services/bookMarkServices';
import { checkIfLikedByUser } from '../Utils/checkLike';
import { AuthContext } from '../Context/AuthProvider';
import { PostContext } from '../Context/PostProvider';
import { addLike, doDislike } from '../Services/likeServices';
import { Menu } from './Menu';
import { EditPost } from './EditPost';
import { getFormatDate } from '../Utils/getFormattedData';




export function UserPost({ singlePost }) {
  const {userState,dispatchUser} = useContext(UserContext);
  const {postState,dispatchPost} = useContext(PostContext);

  const token = localStorage.getItem("token");
  const {user} = useContext(AuthContext);
  const [showMenu,setShowMenu] = useState(false);
  const [showEdit,setShowEdit] = useState(false);

 
  console.log(userState?.allUsers)
  return (
    <div className="individual-posts">
      {showEdit && <div className="EditBg"><EditPost postObj={singlePost} setEdit={setShowEdit}/></div>}
      <div className="username-edit">
        <div className="post-top">
          <img src={user?.profileImg} alt="loading" className="user-post-img"/>
          <div className='post-names'>
            <p className="user-fullname">{user?.firstName} {user?.lastName}</p>
            <p className="username">{singlePost?.username}</p>
          </div>
          <div className="createdDate">{getFormatDate(singlePost?.createdAt)}
          </div>
        </div>
      
        <div className='buttonMenu'>
       {!showMenu ?<i onClick={(e)=>{
                                e.preventDefault();
                                e.stopPropagation();
                                setShowMenu(prev=>!prev);
                                
                            }} class="fa-solid fa-ellipsis-vertical"></i>:
        <i onClick={(e)=>{
          e.preventDefault();
          e.stopPropagation();
          setShowMenu(prev=>!prev);
         
      }} class="fa-solid fa-x"></i>}
      </div>
      {showMenu && <Menu postObj={singlePost} setMenu={setShowMenu} setEdit={setShowEdit} />}
      </div>
      <p>{singlePost?.content}</p>
      
      <div className="icons-individual-post">
        <div>
        
        {checkIfLikedByUser(postState?.posts,singlePost?._id,user?.username) && 
            <i onClick={()=>doDislike(singlePost?._id,token,dispatchPost)} class="fa-solid fa-heart"></i>}
            {!checkIfLikedByUser(postState?.posts,singlePost?._id,user?.username) &&
                  <i onClick={()=>addLike(singlePost?._id,token,dispatchPost)} class="fa-regular fa-heart" />}
                  <span className="likeCount"> ({singlePost?.likes?.likeCount})</span>

        </div>
        
        <i class="fa-regular fa-comment"></i>
        <Link to="/" className="icons-post"><FontAwesomeIcon icon={faShareNodes} /></Link>
       
       { !checkBookMarked(userState.bookMarks,singlePost?._id) && <i onClick={()=>addBookMark(singlePost?._id,token,dispatchUser)} class="fa-regular fa-bookmark"></i> }
       { checkBookMarked(userState.bookMarks,singlePost?._id) && <i onClick={()=>removeBookMark(singlePost?._id,token,dispatchUser)} class="fa-solid fa-bookmark"></i> }

      </div>
    </div>
  );
}



