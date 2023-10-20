import React, { useEffect, useState } from 'react'
import { AuthenticationContext } from '../../Contexts/AuthenticationContext';
import { useContext } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Brand from '../Brands/Brand';
import BrandsPage from '../Brands/BrandsPage';
import Aos from 'aos';



function Home() {
    const { user, userLoading, signInUser } = useContext(AuthenticationContext);
    const [brands, setBrands] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/brands')
            .then((res) => res.json())
            .then((data) => { console.log(data); setBrands(data) });
    }, []);
    return (
        <div className='ml-16 lg:ml-32 xl:ml-64 mr-16 lg:mr-32 xl:mr-64 flex flex-col justify-center items-center'>
            {
                brands ?
                    <BrandsPage allbrands={brands}></BrandsPage>
                    : <span></span>
            }
        </div>
    )
}

export default Home;