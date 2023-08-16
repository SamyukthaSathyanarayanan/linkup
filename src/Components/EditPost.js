import { useContext, useState } from "react";
import "./EditPostStyle.css";
import { doEditPost } from "../Services/getPostServices";
import { PostContext } from "../Context/PostProvider";

export function EditPost({postObj,setEdit}){
    console.log(postObj);
    const token = localStorage.getItem("token");
    const [postContent,setPostContent] = useState(postObj?.content);
    const {dispatchPost} = useContext(PostContext);
    const handleContentChange = (e)=>{
      setPostContent(e.target.value);
  }
  const handleEdit = ()=>{
    doEditPost(postObj?._id,{...postObj,content:postContent},token,dispatchPost);
    setEdit(false);
  } 

  return (
    <div className="overLayModal">
      <div className="EditModelContainer">
          <h2>Edit Post</h2>
          <textarea className="content-textarea" onChange={(e)=>handleContentChange(e)}>{postObj?.content}</textarea>
          <div className="btn-container">
            <button className="btn-update" onClick={()=>handleEdit()}>Update</button>
            <button className="btn-close" onClick={()=>setEdit(false)}>Close</button>
          </div>
      </div>
    </div>)

}