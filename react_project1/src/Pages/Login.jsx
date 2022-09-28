import React from "react";
import "./Login.css"

export default function Login(){
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
                    <img width="100px" src="https://cdn.timecamp.com/res/css/images/crozdesk-icon.1664285842.png" alt="" />
                    <img width="100px" src="https://cdn.timecamp.com/res/css/images/capterra-icon.1664285842.png" alt="" />
                    <img width="100px" src="https://cdn.timecamp.com/res/css/images/crowd-icon.1664285842.png" alt="" />
                    <img width="100px" src="https://cdn.timecamp.com/res/css/images/get-app-icon.1664285842.png" alt="" />
                </div>
            </div>
            <div className="LoginInput">
                <h2>Log in to TimeCamp</h2>
                <button>
                    <img width="30px" src="https://play-lh.googleusercontent.com/aFWiT2lTa9CYBpyPjfgfNHd0r5puwKRGj2rHpdPTNrz2N9LXgN_MbLjePd1OTc0E8Rl1=w240-h480-rw" alt="googleLogo" />
                    Sign up with google
                </button>
                Or
                <input placeholder="Email" />
                <input placeholder="Password" />
                <p>Forgot Password</p>
                <button>Log In</button>
                <p>No Account? Sign up <span>or </span>Log In with SSO</p>
            </div>
        </div>
    )
}