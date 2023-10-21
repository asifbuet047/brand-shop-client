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
        fetch(`https://brand-shop-server-gamma.vercel.app/advertisement`)
            .then((res) => res.json())
            .then((data) => setAdvertisements(data));
    }, []);

    return (
        <div className='h-[40vh]'>
            <Swiper
                effect='creative'
                creativeEffect={{
                    prev: {
                        shadow: true,
                        translate: [0, 0, -400],
                    },
                    next: {
                        rotate: 50,
                        translate: ['50%', 0, 0],
                    },
                }}
                
                pagination={{
                    clickable: true,
                    type: 'bullets'
                }}
                modules={[Pagination, Navigation, EffectCreative]}
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