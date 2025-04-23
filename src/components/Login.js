import React from 'react';

const Login = () => {

    return (
        <div className="login-container">
            <p className="login-title">Login</p>

            <form className="login-form">
                <input type="text" placeholder="Username" />
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button type="submit">Sign In</button>
            </form>
        </div>
    );
};

export default Login;
