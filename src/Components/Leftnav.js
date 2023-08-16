import "./LeftnavStyle.css";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBookmark, faUser, faCompass, faImage,faMoon,faArrowRightFromBracket,faLink} from '@fortawesome/free-solid-svg-icons';
import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";

export function Leftnav() {
  const navigate = useNavigate();
  const {user,setUser} = useContext(AuthContext);
  const handleLogout = ()=>{
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser();
    navigate("/login");
   
}
  return (
    <div className="left-home">
        <h1 className="linkuptxt"> LinkUp</h1>
        <Link to="/" className="leftlinks-home"><FontAwesomeIcon icon={faHome} className="icons" /> Home</Link>
        <Link to="/explore" className="leftlinks-home"> <FontAwesomeIcon icon={faCompass} className="icons" />Explore</Link>
        <Link to="/bookmark" className="leftlinks-home"><FontAwesomeIcon icon={faBookmark} className="icons" /> Bookmark</Link>
        {/* <Link to="/" className="leftlinks-home"><FontAwesomeIcon icon={faMoon} className="icons" />Dark Mode</Link> */}
        <Link to="/profile" className="leftlinks-home"><FontAwesomeIcon icon={faUser} className="icons" /> Profile</Link>
        <button  className="logout-btn-home" onClick={handleLogout}>Logout </button>
      </div>
    
  );
}
