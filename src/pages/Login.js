import React, {useState} from "react";

const Login = () => {
    // const [email, setEmail] = useState()
    // const [password, setPassword] = useState()

    const [info, setInfo] = useState({

        email: "",
        password: ""
    });
    const {email, password} = info
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
            <div className="login-form">
                <h1 className="form-title display-3">Login</h1>
                <form id="login" onSubmit={handleSubmit}>


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
                    <div className="link" onClick={null}>Forgot Password</div>

                    <button type="submit" className="btn btn-primary form-control">
                        Login
                    </button>
                </form>
                <button className="btn btn-primary form-control">
                    Continue with Google
                </button>
            </div>
        </div>
    )
}

export default Login;