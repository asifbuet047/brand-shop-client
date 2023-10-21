import React, { useEffect, useState } from 'react'
import { AuthenticationContext } from '../../Contexts/AuthenticationContext';
import { useContext } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Brand from '../Brands/Brand';
import BrandsPage from '../Brands/BrandsPage';
import BannerPage from '../Banner/BannerPage';
import { ClockLoader, BeatLoader } from 'react-spinners';
import CurrentOffer from '../CurrentOffer/CurrentOffer';
import MostSold from '../MostSold/MostSold';
import NetworkError from '../NetworkError/NetworkError';


function Home() {
    const [brands, setBrands] = useState(null);
    const [banner, setBanner] = useState(null);
    const [networkError, setNetworkError] = useState(false);

    useEffect(() => {
        fetch('https://brand-shop-server-gamma.vercel.app/brands')
            .then((res) => {
                if (res.ok) {
                    return res.json();
                } else {
                    throw new Error('Server is down');
                }
            })
            .then((data) => setBrands(data))
            .catch((error) => { console.error('Fetch error', error); setNetworkError(true) });
    }, []);

    useEffect(() => {
        fetch('https://brand-shop-server-gamma.vercel.app/banner')
            .then((res) => {
                if (res.ok) {
                    return res.json();
                } else {
                    throw new Error('Server is down');
                }
            })
            .then((data) => setBanner(data))
            .catch((error) => { console.error('Fetch error', error); setNetworkError(true) });
    }, []);

    return (
        <div>
            {
                banner ?
                    <BannerPage banner={banner}></BannerPage> :
                    <div className='flex flex-row justify-center pt-10 pb-10 items-center'>
                        {
                            networkError ? <NetworkError></NetworkError>
                                :
                                <BeatLoader color='#36D7B7' margin={10} size={50}></BeatLoader>
                        }
                    </div>
            }
            <div className='mt-5 mb-5'>
                <CurrentOffer></CurrentOffer>
            </div>
            <div className='ml-16 lg:ml-32 xl:ml-64 mr-16 lg:mr-32 xl:mr-64 flex flex-col justify-center items-center'>
                {
                    brands ?
                        <BrandsPage allbrands={brands}></BrandsPage> :
                        <div className='flex flex-row justify-center pt-10 pb-10 items-center'>
                            {
                                networkError ? <NetworkError></NetworkError>
                                    :
                                    <BeatLoader color='#36D7B7' margin={10} size={50}></BeatLoader>
                            }
                        </div>
                }
            </div>
            <div className='mt-5 mb-5'>
                <MostSold></MostSold>
            </div>
        </div>
    )
}

export default Home;