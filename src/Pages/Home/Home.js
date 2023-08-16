import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage} from '@fortawesome/free-solid-svg-icons';
import "./HomeStyle.css"

import { useContext, useState } from "react";
import { PostContext } from "../../Context/PostProvider";
import { AuthContext } from "../../Context/AuthProvider";
import { UserPost } from "../../Components/UserPost";
import { PostCard } from "../../Components/PostCard";
import { filterByFollowing } from "./filters/FollowingPosts";
import { doPost } from "../../Services/getPostServices";
import "./HomeStyle.css";
import { sortFilter } from "./filters/SortFilter";

export function Home(){
  
  const [postContent, setPostContent] = useState("");
  const navigate = useNavigate();
  const { user, setUser } = useContext(AuthContext);
  const { postState, dispatchPost } = useContext(PostContext);
  const token = localStorage.getItem("token");
  let displayPosts = postState?.posts;
  displayPosts = filterByFollowing(displayPosts, user?.following, user?.username);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
    toast.warning("logged out!", {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
  };

  const handleSubmitPost = () => {
    if (postContent !== "") {
      doPost({ content: postContent }, token, dispatchPost);
      setPostContent("");
    }
  };

  const handleTrendingClick = () => {
    dispatchPost({ type: "SET_SORT", payload: "trending" });
  };

  displayPosts = filterByFollowing(displayPosts, user?.following, user?.username);
  displayPosts = sortFilter(displayPosts, postState?.sortType);
    return (
      <div className="center-home">
        <div className="textareabody">
          <div className="imgtextarea">
            <img
              src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000"
              className="imgavatar"
              alt="loading"
            />
            <div className="textarea-container">
              <textarea value={postContent} onChange={(event)=>setPostContent(event.target.value)} className="txtarea" placeholder="Write something interesting..."></textarea>
              <div className="imgpost">
                <FontAwesomeIcon icon={faImage} className="icons" />
                <button onClick={handleSubmitPost} className="post-btn"> Post </button>
              </div>
            </div>
          </div>  
        </div> 
        <div className="sortButtons">
                <button className="sort-btn" onClick={()=>dispatchPost({type:"SET_SORT",payload:"latest"})}>Latest</button>
                <button className="sort-btn" onClick={()=>dispatchPost({type:"SET_SORT",payload:"oldest"})}>Oldest</button>
                <button onClick={()=>handleTrendingClick()} className="sort-btn">Trending</button>
        </div>
        <h1> Latest Posts </h1>
        {displayPosts?.map(postData=> <div> {postData?.username===user?.username && <UserPost singlePost={postData}/>}
                {postData?.username!==user?.username && <PostCard singlePost={postData}/>}</div>)}
      </div> 
)
}