import React from "react";
import './App.css';
import AppRouter from "./router/AppRouter";
import AuthContextProvider from "./context/AuthContext";
import {ToastContainer} from "react-toastify";


function App() {
    return (
        <>
            <AuthContextProvider>
                <AppRouter/>
                <ToastContainer/>
            </AuthContextProvider>

        </>
    );
}

export default App;
