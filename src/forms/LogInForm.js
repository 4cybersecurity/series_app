import React from "react";
import {Form, InputGroup} from "react-bootstrap";
import {LogInButton} from "../buttons/LogInButton";
import {GoogleButton} from "../buttons/GoogleButton";

export class LogInForm extends React.Component {
    render() {
        return <Form onSubmit={this.props.onSubmit}>
            <Form.Group controlId="email">
                <Form.Label>Email</Form.Label>
                <InputGroup>
                    <Form.Control
                        type="email"
                        name="email"
                        placeholder="Enter email.."
                        value={this.props.value}
                        onChange={this.props.onChange}
                        required
                    />
                </InputGroup>
            </Form.Group>

            <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <InputGroup>
                    <Form.Control
                        type="password"
                        name="password"
                        placeholder="Enter password.."
                        value={this.props.value1}
                        onChange={this.props.onChange}
                        required
                    />
                </InputGroup>
            </Form.Group>

            <div className="link" onClick={this.props.onClick}>Forgot Password</div>

            <LogInButton/>

            <GoogleButton onClick={this.props.onClick1}/>
        </Form>;
    }
}