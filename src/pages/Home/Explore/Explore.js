import React from 'react';
import img from '../../../images/explore/explore.jpg'
import './Explore.css'

const Explore = () => {
    return (
        <div className="explore">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h2 className="text">A Simply Perfect Place To Get Lost</h2>
                <p className="text2">Treat yourself with a journey to your inner self. <br />
                    Visit a mystique Tibet and start your spiritual adventure. <br />
                    We promise, you’ll enjoy every step you make.</p>
                <button className="see-more">SEE MORE</button>
            </div>
        </div>
    );
};

export default Explore;