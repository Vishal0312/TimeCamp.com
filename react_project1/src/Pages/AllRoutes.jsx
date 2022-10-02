import {Routes,Route} from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup"

export default function AllRoutes(){
    return(
        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
        </Routes>
    )
}