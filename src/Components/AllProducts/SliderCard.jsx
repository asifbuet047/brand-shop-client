import React from 'react'


function SliderCard({ data }) {
    const { name, image, price } = data;

    return (
        <div className='h-full w-full'>
            <img src={image} alt="" srcSet="" className='rounded-xl w-full bg-cover' />
            <h1 className='absolute top-4 left-1/2 lg:top-4 lg:right-4 text-[#f92fe1] font-bold text-xl lg:text-2xl xl:text-4xl'>{name}</h1>
            <h1 className='absolute top-8 left-1/2 lg:bottom-4 lg:left-4 text-[#f92fe1] font-bold text-lg lg:text-xl xl:text-2xl'>{`Now start from ${price}`}</h1>
        </div>
    )
}


export default SliderCard
