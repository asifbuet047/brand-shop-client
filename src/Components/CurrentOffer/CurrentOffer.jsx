import React, { useEffect, useState } from 'react'
import { ClockLoader, BeatLoader } from 'react-spinners';
import NetworkError from '../NetworkError/NetworkError';

function CurrentOffer() {
  const [offer, setOffer] = useState(null);
  const [networkError, setNetworkError] = useState(false);

  useEffect(() => {
    fetch(`https://brand-shop-server-gamma.vercel.app/currentoffer`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error('Server is down');
        }
      })
      .then((data) => setOffer(data))
      .catch((error) => { console.error('Fetch error', error); setNetworkError(true) });
  }, []);

  return (
    <div className="hero h-1/6 bg-base-200 lg:justify-around lg:pr-2 lg:pt-2">

      {
        offer ?
          <div className="hero-content flex-col">
            <img src={offer.image} className="max-w-full rounded-lg shadow-2xl" />
            <div className='flex flex-col items-center'>
              <h1 className="text-2xl lg:text-5xl font-bold text-center">{offer.name}</h1>
              <p className="text-lg lg:text-xl py-2 lg:py-6"><span className='text-xl lg:text-2xl'>৳</span>{offer.price}</p>
              <button className="btn btn-primary w-fit">Now only <span className='text-xl lg:text-2xl'>৳</span>{offer.price - 5000}</button>
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

export default CurrentOffer