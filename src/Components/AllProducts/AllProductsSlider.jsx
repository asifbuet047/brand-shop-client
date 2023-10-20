import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectCreative, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/effect-creative';
import 'swiper/css/navigation';
import "./Slider.css"
import SliderCard from './SliderCard';

function AllProductsSlider() {
    const [advertisements, setAdvertisements] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/advertisement`)
            .then((res) => res.json())
            .then((data) => setAdvertisements(data));
    }, []);

    return (
        <div className='h-[40vh] ml-5 mr-5 lg:ml-10 lg:mr-10 border-4 border-white rounded-xl'>
            <Swiper
                effect='creative'
                creativeEffect={{
                    prev: {
                        shadow: true,
                        translate: [0, 0, -400],
                    },
                    next: {
                        rotate: 50,
                        translate: ['100%', 0, 0],
                    },
                }}
                spaceBetween={5}

                autoplay={{
                    delay: 5000,
                    disableOnInteraction: true,
                }}
                pagination={{
                    clickable: true,
                    type: 'bullets'
                }}
                modules={[Autoplay, Pagination, Navigation, EffectCreative]}
            >
                {
                    advertisements ?
                        advertisements.map((data, index) => <SwiperSlide key={index}><SliderCard data={data}></SliderCard></SwiperSlide>)
                        : <span></span>
                }
            </Swiper>
        </div>
    )
}

export default AllProductsSlider