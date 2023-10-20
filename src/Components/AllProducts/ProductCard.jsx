import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

function ProductCard({ product }) {
    console.log(product)
    const { _id, brand, description, image, name, price, rating, type } = product;
    return (
        <div className='flex flex-col justify-center items-center'>
            <div className="card w-full lg:w-1/2 bg-base-100 shadow-2xl pt-5 pb-5 pl-2 pr-2 mt-5 mb-5">
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
                        <button className="btn btn-primary"><Link to={`/productdetails/${_id}`}>Details</Link></button>
                        <button className="btn btn-primary">Update</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

ProductCard.propTypes = {}

export default ProductCard
