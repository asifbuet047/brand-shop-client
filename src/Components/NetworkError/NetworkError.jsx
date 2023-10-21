import React from 'react'

function NetworkError() {
    return (
        <div className='border-2 border-red-500 rounded-xl'>
            <h1 className='text-xl lg:text-2xl'>Server connection failed. Check Your internet connection or try later.</h1>
        </div>
    )
}

export default NetworkError