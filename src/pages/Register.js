import React, {useState} from "react";

const Register = () => {
    // const [firstName, setFirstName] = useState()
    // const [lastName, setLastName] = useState()
    // const [email, setEmail] = useState()
    // const [password, setPassword] = useState()

    const [info, setInfo] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    });
    const {firstName, lastName, email, password} = info
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email, password)
    }
    const handleChange = (e) => {
        setInfo({...info, [e.target.name]: e.target.value})
    }
    return (
        <div className="d-flex justify-content-center">
            <div className="form-image">
                <img src={""} alt="sample-serie"/>
            </div>
            <div className="register-form">
                <h1 className="form-title display-3">Register</h1>
                <form id="register" onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="firstName" className="form-label">
                            First Name
                        </label>
                        <input
                            // onChange={(e)=> setFirstName(e.target.value)}
                            onChange={handleChange}
                            type="text"
                            name="firstName"
                            className="form-control"
                            placeholder="Enter first name.."
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="lastName" className="form-label">
                            Last Name
                        </label>
                        <input
                            // onChange={(e)=>setLastName(e.target.value)}
                            onChange={handleChange}
                            type="text"
                            name="lastName"
                            className="form-control"
                            placeholder="Enter last name.."
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                            Email
                        </label>
                        <input
                            // onChange={(e)=>setEmail(e.target.value)}
                            onChange={handleChange}
                            type="email"
                            name="email"
                            className="form-control"
                            placeholder="Enter email.."
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">
                            Password
                        </label>
                        <input
                            // onChange={(e)=>setPassword(e.target.value)}
                            onChange={handleChange}
                            type="password"
                            name="password"
                            className="form-control"
                            placeholder="Enter password.."
                            required
                        />
                    </div>

                    <button type="submit" className="btn btn-primary form-control">
                        Register
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Register;