import React from 'react';
import './Portfolio.css';
import {Swiper, SwiperSlide} from 'swiper/react';
export function Portfolio() {
    return (
        <div className='portfolio'>
            <span>Recent Project</span>
            <span>Portfolio</span>
            <Swiper
            spaceBetween={30}
            slidesPerView={3}
            grabCursor={true}
            className='portfolio-slider'>
                <SwiperSlide>
                    <img src='' alt=''></img>
                </SwiperSlide>
                <SwiperSlide>
                    <img src='' alt=''></img>
                </SwiperSlide>
                <SwiperSlide>
                    <img src='' alt=''></img>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}