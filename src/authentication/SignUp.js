import { useContext, useReducer, useState } from "react"
import axios from "axios";
import { useNavigate,Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";


import "./SignupStyle.css";



function signUpReducer(state,action)
{
    switch(action.type)
    {
        case "setFirstName":
            return {...state,firstName:action.payload};
        case "setLastName":
            return {...state,lastName:action.payload};
        case "setUserName":
            return {...state,userName:action.payload};
        case "setEmail":
            return {...state,userEmail:action.payload};
        case "setPassword":
            return {...state,password:action.payload};
        case "setConfirmPassword":
            return {...state,confirmPassword:action.payload}
        default:
            console.log("something went wrong");
            return {...state}
    }
}
export function SignUp()
{
    const navigate = useNavigate();
    const [passwordType,setPasswordType] = useState("password");
    // const location = useLocation();
    const {user,setUser} = useContext(AuthContext);
    const [userState,reduceFun] = useReducer(signUpReducer,{
        firstName:"",
        lastName:"",
        userName:"",
        userEmail:"",
        password:"",
        confirmPassword:""
    })
    const sendData = {
        username: userState.userName,
        password: userState.password,
        firstName: userState.firstName,
        lastName: userState.lastName,
        email:userState.userEmail
        
    }
    const handlePassword = ()=>{
        setPasswordType((previous)=>previous==="password"?"text":"password");
    }
    const signupHandler = async (e) => {
        e.preventDefault();
        if(userState.password!==userState.confirmPassword){
            alert("Passwords don't match");
        }
        else{
            try {
                const response =  await axios.post(`/api/auth/signup`,{...sendData});
                console.log(response)
                if(response.status===201)
                {
                   
                    localStorage.setItem("token", response.data.encodedToken);
                    localStorage.setItem("user",  JSON.stringify({ user: response.data.createdUser }));
                    
                    setUser({...response.data.createdUser,profileImg:"https://rb.gy/tc5co"});
                   
                    navigate("/");
                }
            } catch (error) {
                console.log(error);
            }
        }
      };
    return (
    
    <div className="container-login">
        <div className="left-box-login">
          <img
            className="img-login signupimg"
            src="https://img.freepik.com/premium-photo/information-privacy-cyber-security-data-protection-internet-technology-concept_161452-4846.jpg"
            alt="loading"
          ></img>
        </div>
        <div className="right-box-login">
            <h2 className="heading-login">Sign up </h2>
        
        <form className="form-login" onSubmit={(event)=>signupHandler(event)}>
                
                    <label  className="label-form">First Name</label>
                    <input required className="input-form" type="text" onChange={(event)=>reduceFun({type:"setFirstName",payload:event.target.value})} />
                
                
                    <label  className="label-form">Last Name</label>
                    <input required className="input-form" type="text" onChange={(event)=>reduceFun({type:"setLastName",payload:event.target.value})}/>
               
                
                    <label className="label-form">UserName</label>
                    <input className="input-form" required type="text" onChange={(event)=>reduceFun({type:"setUserName",payload:event.target.value})}/>
                
                
                    <label  className="label-form">Email</label>
                    <input className="input-form" required type="email" onChange={(event)=>reduceFun({type:"setEmail",payload:event.target.value})}/>
               
                
                    <label className="label-form">Password</label>
                    
                        <input className="input-form" required type={passwordType} onChange={(event)=>reduceFun({type:"setPassword",payload:event.target.value})} />
                        {passwordType==="password" ? <i onClick={()=>handlePassword()} className="bi bi-eye" id="eye"></i>
                            :<i onClick={()=>handlePassword()} className="bi bi-eye-slash" id="eye"></i>}
                
                    <label className="label-form">Confirm Password</label>
                    
                        <input className="input-form" required type={passwordType} onChange={(event)=>
                            reduceFun({type:"setConfirmPassword",payload:event.target.value})} />
                        {passwordType==="password" ? <i onClick={()=>handlePassword()} class="bi bi-eye" id="eye"></i>
                                :<i onClick={()=>handlePassword()} class="bi bi-eye-slash" id="eye"></i>}
                    
                
            <button className="loginButton">Sign up</button>
            <Link className="signup-text-login" to="/login">Back to login page</Link>
        </form>
    </div>
    </div>)
}