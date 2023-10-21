import React, { useState } from 'react'
import { Rating, RoundedStar } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NetworkError from '../NetworkError/NetworkError';
import { ClockLoader, BeatLoader } from 'react-spinners';

function AddProductPage() {
  const [rating, setRating] = useState(0);
  const [networkError, setNetworkError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const name = formData.get('product_name');
    const brand = formData.get('product_brand');
    const image = formData.get('product_image');
    const price = formData.get('product_price');
    const description = formData.get('product_description');
    const type = formData.get('product_type');

    const newProduct = { name, image, type, price, rating, brand, description };

    fetch('http://localhost:5000/addproduct', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newProduct)
    }).then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error('Server is down');
      }
    }).then((data) => {
      if (data.acknowledged) {
        toast.success(`${name} is successfully added in out list`);

      } else {
        toast.error(`${name} is not added in out list. Try later`);
      }
    })
      .catch((error) => { console.error('Fetch error', error); setNetworkError(true) });
  }



  return (
    <div>
      <div>
        <div className='m-4'>
          <h1 className='text-xl lg:text-2xl xl:text-4xl font-bold text-black text-center'>Add New Tech Product in Our Lineup</h1>
        </div>
        <form className='flex flex-col justify-center items-center w-full h-full' onSubmit={handleSubmit}>
          <input name='product_name' type="text" placeholder="Name of the new product" className="input input-bordered w-full max-w-xs m-2" />
          <input name='product_brand' type="text" placeholder="name of brand" className="input input-bordered w-full max-w-xs m-2" />
          <input name='product_image' type="text" placeholder="Product image link" className="input input-bordered w-full max-w-xs m-2" />
          <input name='product_price' type="number" placeholder="Price of the new product" className="input input-bordered w-full max-w-xs m-2" />
          <input name='product_description' type="text" placeholder="Short description of new product" className="input input-bordered w-full max-w-xs m-2" />
          <input name='product_type' type="text" placeholder="Type of the new product" className="input input-bordered w-full max-w-xs m-2" />
          <div className="m-2">
            <Rating
              style={{ maxWidth: 250 }}
              items={10}
              value={rating}
              onChange={setRating}
              itemStyles={{ itemShapes: RoundedStar, activeFillColor: '#FFB700', inactiveFillColor: '#FBF1A9' }}
              radius='large' />
          </div>
          <input type="submit" value="Add Product" className='btn btn-primary m-2' />
        </form>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
        theme="light"
      />
    </div >

  )
}

export default AddProductPage