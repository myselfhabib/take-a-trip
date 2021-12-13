import React from 'react';
import top1 from '../../../images/mechanic/top1.jpg';
import top2 from '../../../images/mechanic/top2.jpg'
import top3 from '../../../images/mechanic/top3.jpg'
import Exopic from '../Expert/Exopic';


const Exotics = [
    {
        img: top1,
        name: 'New Zealand',
    },
    {
        img: top2,
        name: 'France',
    },
    {
        img: top3,
        name: 'Maldives',
    },
]
const Exotic = () => {
    return (
        <div id="Exotic" className="container">
            <h2 className="text-clr mt-5 mb-5">Top Places</h2>
            <div className="row">
                {
                    Exotics.map(expert => <Exopic
                        key={expert.name}
                        expert={expert}
                    >

                    </Exopic>)
                }

            </div>

        </div>
    );
};

export default Exotic;


// import React from 'react';
