import React, { useState } from 'react'
import './Home.css'
import { carouselData, events } from '../../dummyData';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import "swiper/swiper-bundle.min.css";
import { Autoplay, Scrollbar, Pagination, Parallax, Navigation } from 'swiper';


const Home = () => {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    return (
        <div className='home'>
            <Swiper
                modules={[Autoplay, Scrollbar, Pagination, Parallax, Navigation]}
                spaceBetween={50}
                slidesPerView={1}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                scrollbar={{ draggable: true }}
                pagination={{ clickable: true }}
                navigation
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                className="carousel"
            >
                {carouselData.map((item) => (
                    <SwiperSlide key={item.id} className="slide">
                        <img src={`${PF}images/posts/${item.image}`} alt="" className="image" />
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className='about'>
                <div className="about-left">
                    <img src="https://www.sjcem.edu.in/wp-content/uploads/2020/07/aldel-footer-logo.png" alt="" />
                </div>
                <div className='about-right'>
                    St. John College of Engineering and Management (SJCEM) is Established in 2008. It is located in Palghar. It provides facilities for professional education in the rural and tribal area of Palghar District near Mumbai by offering four year Degree Courses in Civil Engineering, Computer Engineering, Electronics and Telecommunications Engineering, IT Engineering and Mechanical Engineering and three year Diploma courses in Civil Engineering, Electronics and Telecommunications Engineering and Mechanical Engineering. SJCEM also offers two year Post Graduate Degree Course – Masters of Management Studies.
                </div>
            </div>
            <div className="events-section">
                <div className="events-section-top">
                    <h2>Latest Events</h2>
                    <Link to="/events">
                        <button className='btn btn-primary-light'>View More</button>
                    </Link>
                </div>
                <Swiper
                    modules={[Scrollbar, Pagination, Navigation]}
                    spaceBetween={50}
                    slidesPerView={3}
                    // scrollbar={{ draggable: true }}
                    pagination={{ clickable: true }}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    className="latest-events"
                >
                    {events.map((item, index) => (
                        <SwiperSlide key={item.id} className="latest-event">
                            <img src={`${PF}images/posts/${item.eventImg}`} alt="" className="image" />
                            <span className='event-date'>{item.scheduleDate}</span>
                            <h4 className='latest-event-title'>{item.title}</h4>
                            <Link to="events/61f2901acc2f8d4765d73b64">Read More</Link>
                        </SwiperSlide>
                    ))}

                </Swiper>
            </div>
        </div>
    )
}

export default Home
