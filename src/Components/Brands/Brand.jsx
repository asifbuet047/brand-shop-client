import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'
import { useNavigate } from 'react-router-dom';

function Brand({ brand }) {
/*  */
    const navigate = useNavigate();

    const handleBrandClick = (event) => {
        navigate(`/allproducts/${brand.name}`);
    }

    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <div data-aos="fade-left" onClick={handleBrandClick} className="card bg-base-300 shadow-2xl border-4 border-red-800 w-full mt-2 mb-2 lg:w-4/5 lg:h-4/5 lg:mt-5 lg:mb-5">
            <figure>
                <img src={brand.logo} alt={brand.name} className='max-w-full h-fit' />
            </figure>
            <div className="card-body">
                <h2 className="text-2xl font-bold text-center">{brand.name}</h2>
            </div>
        </div>
    )
}

export default Brand