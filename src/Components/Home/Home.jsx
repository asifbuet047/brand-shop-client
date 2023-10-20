import React, { useEffect, useState } from 'react'
import { AuthenticationContext } from '../../Contexts/AuthenticationContext';
import { useContext } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Brand from '../Brands/Brand';
import BrandsPage from '../Brands/BrandsPage';
import BannerPage from '../Banner/BannerPage';
import { ClockLoader, BeatLoader } from 'react-spinners';


function Home() {
    const [brands, setBrands] = useState(null);
    const [banner, setBanner] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/brands')
            .then((res) => res.json())
            .then((data) => setBrands(data));
    }, []);

    useEffect(() => {
        fetch('http://localhost:5000/banner')
            .then((res) => res.json())
            .then((data) => setBanner(data));
    }, []);

    return (
        <div>
            {
                banner ?
                    <BannerPage banner={banner}></BannerPage> :
                    <div className='flex flex-row justify-center pt-10 pb-10'>
                        <BeatLoader color='#36D7B7' margin={10} size={50}></BeatLoader>
                    </div>
            }
            <div className='ml-16 lg:ml-32 xl:ml-64 mr-16 lg:mr-32 xl:mr-64 flex flex-col justify-center items-center'>
                {
                    brands ?
                        <BrandsPage allbrands={brands}></BrandsPage> :
                        <div className='flex flex-row justify-center pt-10 pb-10'>
                            <ClockLoader color='#36D7B7' size={100} speedMultiplier={2}></ClockLoader>
                        </div>
                }
            </div>
        </div>
    )
}

export default Home;