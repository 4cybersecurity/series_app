import React from "react";
import {Button} from "react-bootstrap";

export class GoogleButton extends React.Component {
    render() {
        return <Button onClick={this.props.onClick} variant="primary" className="form-control">
            Continue with Google
        </Button>;
    }
}