import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import { PostContext } from "../../Context/PostProvider";
import { getUserPost } from "../../Services/getPostServices";
import { UserPost } from "../../Components/UserPost";
import "./ProfileStyle.css"; 

export function Profile() {
  const { user, setUser } = useContext(AuthContext);
  const { postState, dispatchPost } = useContext(PostContext);
  const [userPosts, setUserPosts] = useState([]);
  
  const getPostFromAPI = async (userName) => {
    const postData = await getUserPost(userName);
    setUserPosts(postData);
  };

  useEffect(() => {
    getPostFromAPI(user?.username);
  }, [postState]);

  return (
    <div className="profile-container">
      <div className="profile-info">
        
        <div className="img-name-alignment">     
        <img className="profile-img" src={user?.profileImg} alt="profileImg" />
          <div className="user-details">

            <div className="user-fullName">{user?.firstName} {user?.lastName}</div>
            <div className="user-username">@{user?.username}</div>
            <p className="user-bio">{user?.bio}</p>
            <div className="user-stats">
            <div><b>{userPosts?.length} Posts</b></div>
            <div><b>{user?.followers?.length}  Followers</b></div>
            <div><b>{user?.following?.length} Following</b></div>
          </div>

          </div>
        
        
       
        </div>   
        
       
         
       
         
        
      </div>
      <div className="user-posts">
        {userPosts?.map(post => (
          <div key={post.id}>
            <UserPost singlePost={post} />
          </div>
        ))}
      </div>
  </div>
  );
}
