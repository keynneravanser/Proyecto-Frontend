import React from "react";
import {Routes,Route} from "react-router-dom"
import Logueo from "../pages/Login";
import Landing from "../pages/LandingPage";


const AppRoutes = () =>{
    return (
        <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/Login" element ={<Logueo/>} />
   
        </Routes>
        
    )
}
export default AppRoutes