import React from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css';

const SignUp = () => {
    return (
        <div className="input-card">
            <h2 className="psu">Please Sign Up</h2>
            <input type="text" className="input-f" placeholder="First Name" /> <br />
            <input type="text" className="input-f" placeholder="Last Name" /><br />
            <input type="text" className="input-f" placeholder="Email" /> <br />
            <input type="text" className="input-f" placeholder="Password" /> <br />
            <Link className="" to="/login">Already Have a Account?</Link> <br />
            <button className="su-btn">Sign Up</button>
        </div>
    );
};

export default SignUp;