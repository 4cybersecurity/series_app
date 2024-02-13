import React, {useState} from "react";
import {Col, Container, Row} from "react-bootstrap";
import {forgotPassword, signIn, signUpProvider} from "../authentication/firebase";
import {useNavigate} from "react-router-dom";
import * as PropTypes from "prop-types";
import {GoogleButton} from "../buttons/GoogleButton";
import {LogInForm} from "../forms/LogInForm";

const Login = () => {
    const [info, setInfo] = useState({
        email: "",
        password: ""
    });

    const formStyle = {
        flex: "1",
        backgroundColor: "lightGray",
        color: "black",
        padding: "5rem"
    };

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
                    <div style={formStyle}>
                        <h1 className="text-center display-3">Login</h1>
                        <LogInForm onSubmit={handleSubmit} value={email} onChange={handleChange} value1={password}
                                   onClick={() => forgotPassword(email)} onClick1={() => signUpProvider(navigate)}/>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

GoogleButton.propTypes = {onClick: PropTypes.func};
LogInForm.propTypes = {
    onSubmit: PropTypes.func,
    value: PropTypes.string,
    onChange: PropTypes.func,
    value1: PropTypes.string,
    onClick: PropTypes.func,
    onClick1: PropTypes.func
};

export default Login;


