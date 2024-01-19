import React, { useContext, useState } from 'react';
import { AppContext } from '../context/App_Context';

const Login = () => {
    const data = useContext(AppContext)
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        data.login(email,password)
        console.log(email, password);

    };

    return (
        <div>
            <form onSubmit={handleSubmit} className='form'>
                {/* Remove 'disabled' attribute to enable the form */}
                <fieldset>
                    <div className="mb-3">
                        <label htmlFor="emailInput" className="form-label">
                            Email address
                        </label>
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                  
                            id="emailInput"
                            className="form-control"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="passwordInput" className="form-label">
                            Password
                        </label>
                        <input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            id="passwordInput"
                            className="form-control"
                            placeholder="Enter your Password"
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Login
                    </button>
                </fieldset>
            </form>
        </div>
    );
};

export default Login;


