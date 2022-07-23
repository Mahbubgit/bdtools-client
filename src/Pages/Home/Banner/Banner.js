import React from 'react';
import banner1 from './../../../Images/banner/1.png';
import banner2 from './../../../Images/banner/2.png';
import banner3 from './../../../Images/banner/3.png';
import banner4 from './../../../Images/banner/4.png';
import banner5 from './../../../Images/banner/5.png';
import banner6 from './../../../Images/banner/6.png';
import banner7 from './../../../Images/banner/7.png';
import banner8 from './../../../Images/banner/8.png';

const Banner = () => {
    return (
        <div>
            <div class="carousel rounded-box">
                <div class="carousel-item">
                    <img src={banner1} alt="" />
                </div>
                <div class="carousel-item">
                    <img src={banner2} alt="" />
                </div>
                <div class="carousel-item">
                    <img src={banner3} alt="" />
                </div>
                <div class="carousel-item">
                    <img src={banner4} alt="" />
                </div>
                <div class="carousel-item">
                    <img src={banner5} alt="" />
                </div>
                <div class="carousel-item">
                    <img src={banner6} alt="" />
                </div>
                <div class="carousel-item">
                    <img src={banner7} alt="" />
                </div>
                <div class="carousel-item">
                    <img src={banner8} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;