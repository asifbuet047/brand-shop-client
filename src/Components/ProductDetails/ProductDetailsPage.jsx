import React, { useContext, useEffect, useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom';
import { AuthenticationContext } from '../../Contexts/AuthenticationContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BeatLoader } from 'react-spinners';


function ProductDetailsPage() {
  const { id } = useParams();
  const { user } = useContext(AuthenticationContext);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://brand-shop-server-gamma.vercel.app/productdetails/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  const handleAddCart = (event) => {
    const userId = user.uid;
    const productId = id;
    const cart = { userId, productId };
    fetch(`https://brand-shop-server-gamma.vercel.app/addcart/${id}`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(cart)
    }).then((res) => res.json()).then((data) => {
      console.log(data);
      if (data['acknowledged'] === true) {
        toast.success(`Product added in Cart`, {
          position: 'bottom-right',
          autoClose: '1000',
          hideProgressBar: false,
          newestOnTop: true,
          closeOnClick: true,
          draggable: false,
          pauseOnHover: false,
          theme: 'light'
        });
      } else {
        toast.error(`Something wrong. Try later`, {
          position: 'bottom-right',
          autoClose: '2000',
          hideProgressBar: false,
          newestOnTop: true,
          closeOnClick: true,
          draggable: false,
          pauseOnHover: false,
          theme: 'light'
        });
      }
    });
  }

  return (
    <div>
      <div className='flex flex-col justify-center items-center'>
        {
          product ?
            <div className="card w-full lg:w-1/2 bg-base-100 shadow-2xl lg:pt-5 lg:pb-5 lg:pl-2 lg:pr-2 lg:mt-5 lg:mb-5">
              <figure>
                <img src={product.image} alt={product.name} className='w-full' />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Name: {product.name}</h2>
                <h2 className="card-title">Brand: {product.brand}</h2>
                <h2 className="card-title">Price: {product.price}</h2>
                <h2 className="card-title">User Rating: {product.rating}</h2>
                <h2 className="card-title">Type: {product.type}</h2>
                <p>{product.description}</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-secondary" onClick={handleAddCart}>Add to Cart</button>
                </div>
              </div>
            </div> :

            <div className='flex flex-row justify-center h-screen items-center'>
              <BeatLoader color='#36D7B7' margin={10} size={50}></BeatLoader>
            </div>
        }
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
    </div>
  )
}

export default ProductDetailsPage