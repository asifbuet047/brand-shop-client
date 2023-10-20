import React from 'react'


function SliderCard({ data }) {
    const { name, image, price } = data;

    return (
        <div className='h-full'>
            <img src={image} alt="" srcSet="" className='rounded-xl w-full h-full' />
            <h1 className='absolute top-4 right-4 text-[#f92fe1] font-bold text-xl lg:text-2xl xl:text-4xl text-right'>{name}</h1>
            <h1 className='absolute bottom-6 left-4 text-[#f92fe1] font-bold text-lg lg:text-xl xl:text-2xl text-left'>{`Now start from ${price}`}</h1>
        </div>
    )
}


export default SliderCard
