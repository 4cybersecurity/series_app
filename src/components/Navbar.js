import React, {useContext} from "react";
import {Link} from "react-router-dom";
import {Nav, Navbar as BootstrapNavbar} from "react-bootstrap";
import {logOut} from "../authentication/firebase";
import {AuthContext} from "../context/AuthContext";
import * as PropTypes from "prop-types";
import {LogOutButton} from "../buttons/LogOutButton";
import {LogInLink} from "./LogInLink";
import {RegisterLink} from "./RegisterLink";

LogOutButton.propTypes = {onClick: PropTypes.func};

const Navbar = () => {
    const { currentUser } = useContext(AuthContext);

    // Define inline styles
    const navbarStyle = {
        background: "dark",
        color: "white",
        padding: "19px 0",
        backgroundColor: "#0b5ed7"
    };

    const brandStyle = {
        color: "white",
        border: "1px solid white", // Add white border
        padding: "5px", // Adjust padding as needed
        borderRadius: "5px", // Add border-radius for rounded corners
        transition: "border-color 0.3s ease", // Add transition for smooth hover effect
    };

    return (
        <div>
            <BootstrapNavbar style={navbarStyle} expand="lg" variant="dark">
                <div className="container">
                    <Link to="/" className="navbar-brand" style={brandStyle}>
                        <h3>TV SHOWS</h3>
                    </Link>
                    <BootstrapNavbar.Toggle aria-controls="responsive-navbar-nav" />
                    <BootstrapNavbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-auto">
                            <div className="d-flex align-items-center">
                                {currentUser ? (
                                    <>
                                        <h5 className="mb-0 text-capitalize">
                                            {currentUser.displayName}
                                        </h5>
                                        <LogOutButton onClick={() => logOut()}/>
                                    </>
                                ) : (
                                    <>
                                        <LogInLink/>
                                        <RegisterLink/>
                                    </>
                                )}
                            </div>
                        </Nav>
                    </BootstrapNavbar.Collapse>
                </div>
            </BootstrapNavbar>
        </div>
    );
};

export default Navbar;
