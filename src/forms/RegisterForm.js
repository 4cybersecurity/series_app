import React from "react";
import {Button, Form, InputGroup} from "react-bootstrap";

export class RegisterForm extends React.Component {
    render() {
        return <Form onSubmit={this.props.onSubmit}>
            <Form.Group controlId="firstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                    type="text"
                    name="firstName"
                    placeholder="Enter first name.."
                    value={this.props.value}
                    onChange={this.props.onChange}
                    required
                />
            </Form.Group>

            <Form.Group controlId="lastName">
                <Form.Label>Last Name</Form.Label>
                <InputGroup>
                    <Form.Control
                        type="text"
                        name="lastName"
                        placeholder="Enter last name.."
                        value={this.props.value1}
                        onChange={this.props.onChange}
                        required
                    />
                </InputGroup>
            </Form.Group>

            <Form.Group controlId="email">
                <Form.Label>Email</Form.Label>
                <InputGroup>
                    <Form.Control
                        type="email"
                        name="email"
                        placeholder="Enter email.."
                        value={this.props.value2}
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
                        value={this.props.value3}
                        onChange={this.props.onChange}
                        required
                    />
                </InputGroup>
            </Form.Group>

            <Button type="submit" variant="primary" block>
                Register
            </Button>
        </Form>;
    }
}