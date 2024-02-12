import React, {useState} from "react";
import {Container, Row, Col, Form, InputGroup, Button} from "react-bootstrap";
import {forgotPassword, signIn, signUpProvider} from "../authentication/firebase";
import {useNavigate} from "react-router-dom";

const Login = () => {
    const [info, setInfo] = useState({
        email: "",
        password: ""
    });

    const navigate = useNavigate();

    const {email, password} = info;

    const handleSubmit = (e) => {
        e.preventDefault();
        signIn(email, password, navigate);
        console.log(email, password);
    };

    const handleChange = (e) => {
        setInfo({...info, [e.target.name]: e.target.value});
    };

    return (
        <Container className="mt-5">
            <Row className="justify-content-center">
                <Col md={6}>
                    <div className="text-center">
                        <img src={"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/4edFyasCrkH4MKs6H4mHqlrxA6b.jpg"}
                        alt="sample-serie" className="img-fluid"/>
                    </div>
                </Col>
                <Col md={6}>
                    <div className="login-form">
                        <h1 className="text-center display-3">Login</h1>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group controlId="email">
                                <Form.Label>Email</Form.Label>
                                <InputGroup>
                                    <Form.Control
                                        type="email"
                                        name="email"
                                        placeholder="Enter email.."
                                        value={email}
                                        onChange={handleChange}
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
                                        value={password}
                                        onChange={handleChange}
                                        required
                                    />
                                </InputGroup>
                            </Form.Group>

                            <div className="link" onClick={()=>forgotPassword(email)}>Forgot Password</div>

                            <Button type="submit" variant="primary" className="mb-3">
                                Login
                            </Button>

                            <Button onClick={() => signUpProvider(navigate)} variant="primary" className="form-control">
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


