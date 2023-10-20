import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function CartProduct({ product }) {
    const { userId, productId } = product;
    const [data, setData] = useState({});
    const { name, brand, price, rating, type, image } = data;

    useEffect(() => {
        fetch(`http://localhost:5000/productdetails/${productId}`)
            .then((res) => res.json())
            .then((data) => { setData(data) });
    }, []);
    return (
        <div className='flex flex-col justify-center items-center'>
            {data ? <div className="card w-full lg:w-1/2 bg-base-100 shadow-2xl pt-5 pb-5 pl-2 pr-2 mt-5 mb-5">
                <figure>
                    <img src={image} alt={name} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Name: {name}</h2>
                    <h2 className="card-title">Brand: {brand}</h2>
                    <h2 className="card-title">Price: {price}</h2>
                    <h2 className="card-title">User Rating: {rating}</h2>
                    <h2 className="card-title">Type: {type}</h2>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Remove from Cart</button>
                    </div>
                </div>
            </div> : <span></span>}
        </div>
    )
}

export default CartProduct