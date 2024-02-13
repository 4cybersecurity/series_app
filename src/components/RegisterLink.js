import React from "react";
import {Link} from "react-router-dom";

export class RegisterLink extends React.Component {
    render() {
        return <Link
            to="/register"
            className="btn btn-outline-light ms-2"
        >
            Register
        </Link>;
    }
}