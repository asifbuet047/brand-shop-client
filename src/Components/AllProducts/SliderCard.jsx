import React from 'react'


function SliderCard({ data }) {
    const { name, image, price } = data;

    return (
        <div className='h-full'>
            <img src={image} alt="" srcSet="" className='h-full max-w-full' />
        </div>
    )
}


export default SliderCard
