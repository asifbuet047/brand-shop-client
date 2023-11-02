import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectCreative, Navigation, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
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
        <div className='h-fit w-full mt-5 border-2 rounded-lg'>
            <Swiper
                effect='fade'
                pagination={{
                    clickable: true,
                    type: 'bullets'
                }}
                modules={[Pagination, Navigation, EffectFade]}
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