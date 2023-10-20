import React from 'react'

function BannerPage({ banner }) {
    return (
        <div className="hero h-1/6 bg-base-200 lg:justify-around lg:pr-10 lg:pt-5">
            <div className="hero-content flex-col lg:flex-row">
                <img src={banner.product_banner_image} className="max-w-lg rounded-lg shadow-2xl" />
                <div className='flex flex-col items-center lg:items-start'>
                    <h1 className="text-2xl lg:text-5xl font-bold">{banner.product_name}</h1>
                    <p className="text-lg lg:text-xl py-6">{banner.product_short_des}</p>
                    <button className="btn btn-primary w-fit">Buy only ${banner.product_price}</button>
                </div>
            </div>
        </div>
    )
}

export default BannerPage