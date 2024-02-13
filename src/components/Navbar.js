import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Navbar as BootstrapNavbar } from "react-bootstrap";
import { logOut } from "../authentication/firebase";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
    const navigate = useNavigate();
    const { currentUser } = useContext(AuthContext);

    // Define inline styles
    const navbarStyle = {
        background: "dark",
        color: "white",
        padding: "10px 0", // Adjust padding as needed
    };

    const brandStyle = {
        color: "white",
    };

    return (
        <div>
            <BootstrapNavbar style={navbarStyle} expand="lg" variant="dark">
                <div className="container">
                    <Link to="/" className="navbar-brand" style={brandStyle}>
                        <h4>Series App</h4>
                    </Link>
                    <div className="d-flex align-items-center">
                        {currentUser ? (
                            <>
                                <h5 className="mb-0 text-capitalize">
                                    {currentUser.displayName}
                                </h5>
                                <Button
                                    onClick={() => logOut()}
                                    className="ms-2"
                                    variant="outline-light"
                                >
                                    Logout
                                </Button>
                            </>
                        ) : (
                            <>
                                <Button
                                    onClick={() => navigate("/login")}
                                    className="ms-2"
                                    variant="outline-light"
                                >
                                    Login
                                </Button>
                                <Button
                                    onClick={() => navigate("/register")}
                                    className="ms-2"
                                    variant="outline-light"
                                >
                                    Register
                                </Button>
                            </>
                        )}
                    </div>
                </div>
            </BootstrapNavbar>
        </div>
    );
};

export default Navbar;
