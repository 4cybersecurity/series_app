import React from "react";
import {Link} from "react-router-dom";

export class LogInLink extends React.Component {
    render() {
        return <Link
            to="/login"
            className="btn btn-outline-light ms-2"
        >
            Login
        </Link>;
    }
}