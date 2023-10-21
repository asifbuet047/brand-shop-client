import React, { useEffect, useState } from 'react'
import { ClockLoader, BeatLoader } from 'react-spinners';

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
    <div className="hero h-1/6 bg-base-200 lg:justify-around lg:pr-10 lg:pt-5">

      {
        offer ?
          <div className="hero-content flex-col lg:flex-row">
            <img src={offer.image} className="max-w-lg rounded-lg shadow-2xl" />
            <div className='flex flex-col items-center lg:items-start'>
              <h1 className="text-2xl lg:text-5xl font-bold">{offer.name}</h1>
              <p className="text-lg lg:text-xl py-6">{offer.price}</p>
              <button className="btn btn-primary w-fit">Now only {offer.price - 10}</button>
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