import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import { PostContext } from "../../Context/PostProvider";
import { UserPost } from "../../Components/UserPost";
import { PostCard } from "../../Components/PostCard";

export function Explore(){

  const {user} = useContext(AuthContext);
  const {postState} = useContext(PostContext);
  let displayPosts = postState?.posts;
  return(
    <>
      <div className="post-container">{displayPosts?.map(postData=>
        <div className="individualPost"> 
            {postData?.username===user?.username && <UserPost singlePost={postData}/>}
            {postData?.username!==user?.username && <PostCard singlePost={postData}/>}
        </div>)}
      </div>
    </>
  )
}