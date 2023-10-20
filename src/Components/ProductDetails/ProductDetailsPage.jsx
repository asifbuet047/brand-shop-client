import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function ProductDetailsPage() {
  const { id } = useParams();
  console.log(id);
  const [product, setProduct] = useState({});
  const { brand, description, image, name, price, rating, type } = product;

  useEffect(() => {
    fetch(`http://localhost:5000/productdetails/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  return (
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
            <button className="btn btn-secondary">Add to Cart</button>
    
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetailsPage