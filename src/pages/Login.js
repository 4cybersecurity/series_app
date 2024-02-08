import React, { useState } from "react";
import { Container, Row, Col, Form, InputGroup, FormControl, Button } from "react-bootstrap";

const Login = () => {
    const [info, setInfo] = useState({
        email: "",
        password: ""
    });

    const { email, password } = info;

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email, password);
    };

    const handleChange = (e) => {
        setInfo({ ...info, [e.target.name]: e.target.value });
    };

    return (
        <Container className="mt-5">
            <Row className="justify-content-center">
                <Col md={6}>
                    <div className="text-center">
                        <img src={""} alt="sample-serie" className="img-fluid" />
                    </div>
                </Col>
                <Col md={6}>
                    <div className="login-form">
                        <h1 className="text-center display-3">Login</h1>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group controlId="email" className="mb-3">
                                <Form.Label>Email</Form.Label>
                                <InputGroup>
                                    <FormControl
                                        type="email"
                                        name="email"
                                        placeholder="Enter email.."
                                        value={email}
                                        onChange={handleChange}
                                        required
                                    />
                                </InputGroup>
                            </Form.Group>

                            <Form.Group controlId="password" className="mb-3">
                                <Form.Label>Password</Form.Label>
                                <InputGroup>
                                    <FormControl
                                        type="password"
                                        name="password"
                                        placeholder="Enter password.."
                                        value={password}
                                        onChange={handleChange}
                                        required
                                    />
                                </InputGroup>
                            </Form.Group>

                            <div className="link" onClick={null}>Forgot Password</div>

                            <Button type="submit" variant="primary" className="mb-3" block>
                                Login
                            </Button>

                            <Button variant="primary" className="form-control" block>
                                Continue with Google
                            </Button>
                        </Form>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;
