import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { AuthenticationContext } from '../../Contexts/AuthenticationContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ProductDetailsPage() {
  const { id } = useParams();
  const { user, signOutUser } = useContext(AuthenticationContext);
  console.log(user);
  const [product, setProduct] = useState({});
  const { brand, description, image, name, price, rating, type } = product;

  useEffect(() => {
    fetch(`http://localhost:5000/productdetails/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  const handleAddCart = (event) => {
    const userId = user.uid;
    const productId = id;
    const cart = { userId, productId };
    fetch(`http://localhost:5000/addcart/${id}`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
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
        <div className="card w-full lg:w-1/2 bg-base-100 shadow-2xl lg:pt-5 lg:pb-5 lg:pl-2 lg:pr-2 lg:mt-5 lg:mb-5">
          <figure>
            <img src={image} alt={name} className='w-full' />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Name: {name}</h2>
            <h2 className="card-title">Brand: {brand}</h2>
            <h2 className="card-title">Price: ${price}</h2>
            <h2 className="card-title">User Rating: {rating}</h2>
            <h2 className="card-title">Type: {type}</h2>
            <p>{description}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-secondary" onClick={handleAddCart}>Add to Cart</button>
            </div>
          </div>
        </div>
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