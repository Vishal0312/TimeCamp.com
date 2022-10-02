import { NavLink } from "react-router-dom"
import React from "react"
import "./NavbarForHome.css"

export default function NavbarForHome(){
    return(
        <div className="nav">
            <NavLink to="/home">Home</NavLink>     
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/signup">Sign up</NavLink>
        </div>
    )
}