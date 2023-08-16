import { useContext } from "react";
import "./MenuStyle.css";
import { doDeletePost } from "../Services/getPostServices";
import { PostContext } from "../Context/PostProvider";
export function Menu({postObj,setMenu,setEdit})
{
    const {dispatchPost} = useContext(PostContext);
    const token = localStorage.getItem("token");
    
    const handleEdit = (e)=>{
      setMenu(false);
      e.stopPropagation();
      setEdit(true);
    }
    return (<div className="menuContainer">
    <div className="option" onClick={(e)=>handleEdit(e)}>Edit</div>
    <hr />
    <div className="option" onClick={()=>doDeletePost(postObj?._id,token,dispatchPost)}>Delete</div>
  
  </div>)
}
