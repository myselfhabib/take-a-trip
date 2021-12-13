import React, { useEffect, useState } from 'react';
import './ManageService.css';

const ManageService = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://intense-crag-40845.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);
    const handleDelete = id => {
        const url = `https://intense-crag-40845.herokuapp.com/services/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    const remaining = services.filter(service => service._id !== id);
                    setServices(remaining);
                    alert('successfully deleted')
                }

            })
    }
    return (
        <div>
            <div>
                <h2 className="mt-5">Manage Services</h2>
            </div>

            <div className="m-service">
                {
                    services.map(service => <div key={service._id}>

                        <img src={service.img} alt="" /> <br />
                        <h3>{service.name}</h3>
                        <p>{service.description.slice(0, 60)}</p>
                        <button className="rounded2" onClick={() => handleDelete(service._id)}>Delete</button>
                        <button className="rounded3">Update</button>
                    </div>)
                }
            </div>
        </div>
    );
};

export default ManageService;