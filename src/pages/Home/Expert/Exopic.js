import React from 'react';

const Exopic = ({ expert }) => {
    const { name, img } = expert;
    return (
        <div className="col-lg-4 col-sm-6 col-12 card">
            <img src={img} alt="" />
            <h3>{name}</h3>
        </div>
    );
};

export default Exopic;