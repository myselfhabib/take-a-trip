import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { _id, name, price, description, img } = service;
    return (
        <div className='service'>
            <img src={img} className="rounded" alt="" />
            <h4>{name}</h4>
            <p className="px-3">{description.slice(0, 180)}</p>
            <h5>Price: ${price}</h5>
            <Link to={`/booking/${_id} ${name}`}><button className=" rounded2">BOOKING</button></Link>
        </div>
    );
};

export default Service;