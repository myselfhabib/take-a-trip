import React from 'react';
import img from '../Booked/png.png';
import './Booked.css';

const Booked = () => {
    return (
        <div>
            <img className="booked" src={img} alt="" />
        </div>
    );
};

export default Booked;