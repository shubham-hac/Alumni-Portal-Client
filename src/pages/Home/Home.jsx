import React, { useState } from 'react'
import './Home.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { carouselData } from '../../dummyData';

import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import "swiper/swiper-bundle.min.css";

const Home = () => {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    return (
        <div className='home'>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                className="carousel"
            >
                {carouselData.map((item, index) => (
                    <SwiperSlide key={item.id} className="slide">
                        <img src={`${PF}images/posts/${item.image}`} alt="" className="image" />
                    </SwiperSlide>
                ))}
                {/* <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide> */}
                ...
            </Swiper>
        </div>
    )
}

export default Home
