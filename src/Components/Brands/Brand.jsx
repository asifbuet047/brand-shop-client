import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'
import { useNavigate } from 'react-router-dom';

function Brand({ brand }) {

    const navigate = useNavigate();

    const handleBrandClick = (event) => {
        navigate(`/allproducts/${brand.name}`);
    }

    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <div data-aos="fade-left" onClick={handleBrandClick} className="card w-1/2 h-1/2 bg-base-300 shadow-2xl mt-5 mb-5 border-4 border-red-800">
            <figure>
                <img src={brand.logo} alt={brand.name} className='w-full h-full' />
            </figure>
            <div className="card-body">
                <h2 className="text-2xl font-bold text-center">{brand.name}</h2>
            </div>
        </div>
    )
}

export default Brand