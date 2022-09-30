import axios from "axios";
import React from "react";
import "./Login.css"
import NavbarForLogin from "./NavbarForLogin";


export default function Login(){

    

    const [originalData,setOriginalData] = React.useState([])
    const [dataToCheck,setDataToCheck] = React.useState({
        email:"",
        password:""
    })

     function getData() {
        return axios.get(`http://localhost:3002/users`)
        
    }
    
    const handleLogin = () => {
        getData().then((res)=>setOriginalData(res.data)).catch((err)=>console.log(err)).finally(()=> console.log("done"))
        
    }

    React.useEffect(()=>{
        handleLogin() 
        
    },[])

    const handleChange=(e)=>{
        const {name, value} = e.target;
        setDataToCheck({
            ...dataToCheck,
            [name]: value
        })
    }
    
    const handle = () =>{
        console.log(dataToCheck)
        console.log(originalData)
        for(let i=0;i<originalData.length;i++){
            if(dataToCheck.email==originalData[i].email && dataToCheck.password==originalData[i].password){
                console.log("yes")
                return;
            }
        }
        alert("Invalid Email or Password")
    }

    return(
        
        <div className="Login">
            
            <div className="LoginExtension">
                
                <p>product update</p>
                <h1>TimeCamp Plugin from Google Chrome</h1>
                <h2>Track time without leaving chrome in 70+ apps</h2>
                <button>
                    <img width="20px" src="https://cdn.timecamp.com/res/css/images/chrome-icon-button.1664285842.png" alt="chrome" />
                    Add TimeCamp from Chrome
                </button>
                <div className="LoginImages">
                    <img width="95%" src="https://cdn.timecamp.com/res/css/images/crozdesk-icon.1664285842.png" alt="" />
                    <img width="95%" src="https://cdn.timecamp.com/res/css/images/capterra-icon.1664285842.png" alt="" />
                    <img width="95%" src="https://cdn.timecamp.com/res/css/images/crowd-icon.1664285842.png" alt="" />
                    <img width="95%" src="https://cdn.timecamp.com/res/css/images/get-app-icon.1664285842.png" alt="" />
                </div>
            </div>

            <div className="LoginInput">
                <h2>Log in to TimeCamp</h2>
                <button>
                    <img width="30px" src="https://play-lh.googleusercontent.com/aFWiT2lTa9CYBpyPjfgfNHd0r5puwKRGj2rHpdPTNrz2N9LXgN_MbLjePd1OTc0E8Rl1=w240-h480-rw" alt="googleLogo" />
                    Sign up with google
                </button>
                Or
                <input name="email" type="email" value={dataToCheck.email} placeholder="Email"
                 onChange={handleChange} />
                <input name="password" type="password" value={dataToCheck.password} placeholder="Password"
                onChange={handleChange} />
                <p>Forgot Password</p>
                <button className="LI" onClick={handle}>Log In</button>
                <p>No Account? Sign up <span>or </span>Log In with SSO</p>
            </div>
        </div>
    )
}