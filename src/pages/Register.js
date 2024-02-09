import React, {useState} from "react";
import {Container, Row, Col, Form, Button} from "react-bootstrap";
import {createUser} from "../authentication/firebase";
import {useNavigate} from "react-router-dom";

const Register = () => {
    const [info, setInfo] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    });

    const navigate = useNavigate();

    const {firstName, lastName, email, password} = info;

    const handleSubmit = (e) => {
        e.preventDefault();
        const displayName = `${firstName} ${lastName}`;
        createUser(email, password, navigate, displayName);
    };

    const handleChange = (e) => {
        setInfo({...info, [e.target.name]: e.target.value});
    };

    return (
        <Container className="mt-5">
            <Row className="justify-content-center">
                <Col md={6}>
                    <div className="text-center">
                        <img src={""} alt="sample-serie" className="img-fluid"/>
                    </div>
                </Col>
                <Col md={6}>
                    <div className="register-form">
                        <h1 className="text-center display-3">Register</h1>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group controlId="firstName">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="firstName"
                                    placeholder="Enter first name.."
                                    value={firstName}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>

                            <Form.Group controlId="lastName">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="lastName"
                                    placeholder="Enter last name.."
                                    value={lastName}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>

                            <Form.Group controlId="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    name="email"
                                    placeholder="Enter email.."
                                    value={email}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>

                            <Form.Group controlId="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    name="password"
                                    placeholder="Enter password.."
                                    value={password}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>

                            <Button type="submit" variant="primary" block>
                                Register
                            </Button>
                        </Form>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Register;
