import React from 'react'


function SliderCard({ data }) {
    const { name, image, price } = data;

    return (
        <div className='w-auto h-auto'>
            <img src={image} alt="" srcSet="" className='h-full w-full' />
        </div>
    )
}


export default SliderCard
