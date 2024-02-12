import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Navbar as BootstrapNavbar } from "react-bootstrap";
import { logOut } from "../authentication/firebase";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
    const navigate = useNavigate();
    const { currentUser } = useContext(AuthContext);

    return (
        <div>
            <BootstrapNavbar bg="dark" expand="lg" variant="dark">
                <div className="container">
                    <Link to="/" className="navbar-brand text-white">
                        <h4>Series App</h4>
                    </Link>
                    <div className="d-flex text-white align-items-center">
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
