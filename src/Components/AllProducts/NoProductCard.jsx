import React from 'react'

function NoProductCard({ brand }) {
    return (
        <div className='text-xl lg:text-2xl xl:text-4xl font-bold'>
            <h1 className='text-center'>`Currently We dont have any products of ${brand}` </h1>
        </div>
    )
}

export default NoProductCard