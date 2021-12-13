import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'
import banner1 from '../../../images/banner/banner1.jpg'
import banner2 from '../../../images/banner/banner2.jpg'
import banner3 from '../../../images/banner/banner3.jpg'

const Banner = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <p className="p2">Your Perfect Vacation</p>
                        <p className="banner-tlt">YOUR JOURNEY BEGINS</p>
                        <h3 className="banner-tlt2">TAKE A TRIP</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <p className="p2">Your Perfect Vacation</p>
                        <p className="banner-tlt">The Jouurney Of A life Time</p>
                        <h3 className="banner-tlt2">TAKE A TRIP</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <p className="p2">Your Perfect Vacation</p>
                        <p className="banner-tlt4">Real Life Experiences</p>
                        <h3 className="banner-tlt3">TAKE A TRIP</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner;