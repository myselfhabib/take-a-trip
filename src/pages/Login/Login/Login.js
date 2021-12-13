import React from 'react';
import useAuth from '../../../hooks/useAuth';
import './Login.css'
import logo from '../../../images/icon/google-logo.ico'
import { Link, useLocation, useHistory } from 'react-router-dom';
import SignUp from '../SignUp/SignUp';

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home'

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }
    return (
        <div class="input-card">
            <h2 className="login">Please Login</h2>
            <input type="text" id="email" placeholder="Email" name="email" className="w-full  rounded-lg ring-red-200 focus:ring-4 focus:outline-none glass transition duration-300 border border-gray-300 focus:shadow-xl" />
            <br /> <br />
            <input type="password" placeholder="Password" name="password" class="w-full  rounded-lg ring-red-200 focus:ring-4 focus:outline-none glass transition duration-300 border border-gray-300 focus:shadow-xl" /> <br /> <br />
            <Link className="" to="/SignUp">Create An Account?</Link> <br /> <br />
            <p>Or</p>
            <button onClick={handleGoogleLogin} className="btn2"><img src={logo} alt="" />Sign In With Google</button>
        </div>
    );
};

export default Login;