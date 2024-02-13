import React, {useState} from "react";
import {Col, Container, Row} from "react-bootstrap";
import {createUser} from "../authentication/firebase";
import {useNavigate} from "react-router-dom";
import * as PropTypes from "prop-types";
import {RegisterForm} from "../forms/RegisterForm";

const Register = () => {
    const [info, setInfo] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    });

    const formStyle = {
        flex: "1",
        backgroundColor: "lightGray",
        color: "black",
        padding: "5rem"
    };

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
                        <img src={"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/4edFyasCrkH4MKs6H4mHqlrxA6b.jpg"}
                             alt="sample-serie" className="img-fluid"
                        />
                    </div>
                </Col>
                <Col md={6}>
                    <div style={formStyle}>
                        <h1 className="text-center display-3">Register</h1>
                        <RegisterForm onSubmit={handleSubmit} value={firstName} onChange={handleChange}
                                      value1={lastName} value2={email} value3={password}/>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

RegisterForm.propTypes = {
    onSubmit: PropTypes.func,
    value: PropTypes.string,
    onChange: PropTypes.func,
    value1: PropTypes.string,
    value2: PropTypes.string,
    value3: PropTypes.string
};

export default Register;
