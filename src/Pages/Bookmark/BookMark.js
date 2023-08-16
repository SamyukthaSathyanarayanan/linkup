import { useContext, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import { UserContext } from "../../Context/UserProvider";
import { UserPost } from "../../Components/UserPost";
import { PostCard } from "../../Components/PostCard";

export function BookMark()
{
    const {user} = useContext(AuthContext);
    const {userState} = useContext(UserContext);
    const displayPosts = userState?.bookMarks;
    console.log(displayPosts);

    return (
    <div className="BookMarksPage">
            <div className="bookmarks-container">
                
            {displayPosts?.length<=0 && <div className="no-bookmark-msg">
                <h2>No bookmarks yet</h2>
            </div>}
            {displayPosts?.length>0 && 
            <div>
                <h2>Bookmarks</h2>
                {displayPosts?.map(postData=>
                    <div className="individualPost"> 
                    
                        {postData?.username===user?.username && <UserPost singlePost={postData}/>}
                        {postData?.username!==user?.username && <PostCard singlePost={postData}/>}
                    </div>)}
            </div>
            }
                </div> 
    </div>)
}