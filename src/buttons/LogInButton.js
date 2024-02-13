import React from "react";
import {Button} from "react-bootstrap";

export class LogInButton extends React.Component {
    render() {
        return <Button type="submit" variant="primary" className="mb-3">
            Login
        </Button>;
    }
}