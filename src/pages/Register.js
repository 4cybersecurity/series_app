import React from "react";

const Register = () =>{
    return(
        <div className="d-flex justify-content-center">
            <div className="form-image">
                <img src={""} alt="sample-serie"/>
            </div>
            <div className="register-form">
                <h1 className="form-title display-3">Register</h1>
                <form id="register">
                    <div className="mb-3">
                        <label htmlFor="firstName" className="form-label">
                            First Name
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter first name.."
                        />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register;