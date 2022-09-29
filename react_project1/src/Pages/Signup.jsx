import React from "react";
import "./Signup.css"
import axios from "axios"

function Signup(){
    const [dataToPost,setDataToPost] = React.useState({
        email:"",
        password:"",
        phone:""
    })

    const handleChange = (e) =>{
        const {name, value, type} = e.target;
        const val = type ==="phone"? Number(value) : value;
        setDataToPost({
            ...dataToPost,
            [name] : val
        }) 
    }

    function addUser(dataToPost){
        axios.post(`http://localhost:3002/users`,{
            email: dataToPost.email,
            password:dataToPost.password,
            phone:dataToPost.phone

        })
    }
    const handleSubmit = (e) => {
        addUser(dataToPost)
    }

    return (
        <div>
            <div className="SignupHead">
                <h1>Start tracking timer</h1>
                <h2>Create an account and start with a 14 day free trial</h2>
                <h4>All features. No credit card required</h4>
                <button>
                    <img width="30px" src="https://play-lh.googleusercontent.com/aFWiT2lTa9CYBpyPjfgfNHd0r5puwKRGj2rHpdPTNrz2N9LXgN_MbLjePd1OTc0E8Rl1=w240-h480-rw" alt="googleLogo" />
                    Sign up with google</button>
            </div>
            Or
            <div className="SignupInput">
                <input name="email" type="email" placeholder="Email" onChange={handleChange} value={dataToPost.email}/>
                <input name="password" type="password" placeholder="Password" onChange={handleChange} value={dataToPost.password} />
                <input name="phone" type="number" placeholder="Phone(optional)" onChange={handleChange} value={dataToPost.phone} />
                <button onClick={handleSubmit}>Sign up for free</button>
                <p>By signing up you agree to our <span>Terms of Service</span> and <span>Privacy Policy</span></p>
            </div>
        </div>
    )
}


export default Signup;