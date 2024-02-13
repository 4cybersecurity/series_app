import React from "react";
import {Button} from "react-bootstrap";

export class LogOutButton extends React.Component {
    render() {
        return <Button
            onClick={this.props.onClick}
            className="ms-2"
            variant="outline-light"
        >
            Logout
        </Button>;
    }
}