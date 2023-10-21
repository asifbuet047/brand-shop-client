import React, { useEffect, useState } from 'react'
import { ClockLoader, BeatLoader } from 'react-spinners';

function MostSold() {
    const [mostsold, setMostsold] = useState(null);
    const [networkError, setNetworkError] = useState(false);

    useEffect(() => {
        fetch(`https://brand-shop-server-gamma.vercel.app/mostsold`)
            .then((res) => {
                if (res.ok) {
                    return res.json();
                } else {
                    throw new Error('Server is down');
                }
            })
            .then((data) => setMostsold(data))
            .catch((error) => { console.error('Fetch error', error); setNetworkError(true) });
    }, []);

    return (
        <div className="hero w-full h-1/6 bg-base-200 lg:justify-around lg:pr-10 lg:pt-5">
            {
                mostsold ?
                    <div className="hero-content flex-col lg:flex-row">
                        <img src={mostsold.image} className="max-w-lg rounded-lg shadow-2xl" />
                        <div className='flex flex-col items-center lg:items-center'>
                            <h1 className="text-2xl lg:text-5xl font-bold text-center">Our most sold product {mostsold.name}</h1>
                            <p className="text-lg lg:text-xl py-6"><span className='text-2xl lg:text-4xl'>৳</span> {mostsold.price * 102}</p>
                            <p className="text-lg lg:text-xl py-6">Sold count {mostsold.sold}</p>
                            <button className="btn btn-primary w-fit">Now only <span className='text-xl lg:text-2xl'>৳</span> {mostsold.price * 102 - 10 * 102}</button>
                        </div>
                    </div>
                    :
                    <div className='flex flex-row justify-center pt-10 pb-10 items-center'>
                        {
                            networkError ? <NetworkError></NetworkError>
                                :
                                <BeatLoader color='#36D7B7' margin={10} size={50}></BeatLoader>
                        }
                    </div>

            }


        </div>
    )
}

export default MostSold