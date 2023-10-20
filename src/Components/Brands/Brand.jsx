import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'

function Brand({ brand }) {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <div data-aos="fade-left" className="card w-1/2 h-64 bg-base-300 shadow-2xl mt-5 mb-5 border-2 border-red-800">
            <figure>
                <img src={brand.logo} alt={brand.name} className='w-full h-full'/>
            </figure>
            <div className="card-body">
                <h2 className="text-2xl font-bold text-center">{brand.name}</h2>
            </div>
        </div>
    )
}

export default Brand