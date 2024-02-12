import React, {useContext} from "react";
import {BrowserRouter, Navigate, Outlet, Route, Routes} from "react-router-dom";
import Navbar from "../components/Navbar";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Main from "../pages/Main";
import SerieDetail from "../pages/SerieDetail";
import {AuthContext} from "../context/AuthContext";




const AppRouter = () => {
    const {currentUser} = useContext(AuthContext)
    function PrivateRouter(){
        return currentUser ? <Outlet/> : <Navigate to="/login" replace/>
    }
    return(
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/details/:id" element={<PrivateRouter/>}>
                <Route path="/details/:id" element={<SerieDetail/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;