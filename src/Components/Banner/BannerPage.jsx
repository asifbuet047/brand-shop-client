import React from 'react'

function BannerPage({ banner }) {
    return (
        <div className="h-1/6 bg-base-200 rounded-lg justify-around mt-5 p-3">
            <div className="flex-col lg:flex-row">
                <img src={banner.product_banner_image} className="max-w-full rounded-lg shadow-2xl" />
                <div className='flex flex-col items-center lg:items-center'>
                    <h1 className="text-2xl lg:text-5xl font-bold text-center">{banner.product_name}</h1>
                    <p className="text-lg lg:text-xl py-2 lg:py-6">{banner.product_short_des}</p>
                    <button className="btn btn-primary w-fit">Buy only <span className='text-xl lg:text-2xl'>৳</span>{banner.product_price}</button>
                </div>
            </div>
        </div>
    )
}

export default BannerPage