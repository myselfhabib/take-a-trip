import React from 'react';
import './Footer.css';
import logo from '../../images/logo/travel-logo.png';
import img from '../Footer/insta-logo.ico';
import img2 from '../Footer/fb-logo.ico';
import img3 from '../Footer/twitter-logo.ico';
import img4 from '../Footer/youtube.ico';

const Footer = () => {
    return (
        <div className="d-flex">
            <div>
                <img className="logo2" src={logo} alt="" />
            </div>
            <div>
                <p className="poppins">Take A Trip And Relax Your Life</p>
                <p>About Online Ticket Book</p>
                <p>Read Our Blog</p>
                <p>Register To Become A VIP</p>
                <p>Add Your Experience</p>
            </div>
            <div>
                <p>Get Help</p>
                <p>Ask Any Question</p>
                <p>VIP Access</p>
                <p>Contact</p>
                <p>Copyright © Privacy Policy</p>
            </div>
            <div className="logos">

                <p><img src={img} alt="" />Instagram</p>
                <p><img src={img2} alt="" />Facebook</p>
                <p><img src={img3} alt="" />Twitter</p>
                <p><img src={img4} alt="" />Youtube</p>
            </div>
        </div>
    );
};

export default Footer;