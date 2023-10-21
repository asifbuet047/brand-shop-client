import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { BeatLoader } from 'react-spinners';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'


function CartProduct({ product }) {
    const { _id, userId, productId } = product;
    const [data, setData] = useState(null);


    useEffect(() => {
        fetch(`http://localhost:5000/productdetails/${productId}`)
            .then((res) => res.json())
            .then((data) => { setData(data) });
    }, []);

    const handleRemoveCart = () => {
        // fetch(`http://localhost:5000/removecar/${_id}`, {
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(newProduct)
        // }).then((res) => res.json()).then((data) => console.log(data));
        Swal.fire({
            position: 'top-end',
            title: 'Error!',
            text: 'Do you want to continue',
            icon: 'error',
            confirmButtonText: 'Cool'
        })

    }

    return (
        <div className='flex flex-col justify-center items-center'>
            {
                data ? <div className="card w-full lg:w-1/2 bg-base-100 shadow-2xl pt-5 pb-5 pl-2 pr-2 mt-5 mb-5">
                    <figure>
                        <img src={data.image} alt={data.name} />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Name: {data.name}</h2>
                        <h2 className="card-title">Brand: {data.brand}</h2>
                        <h2 className="card-title">Price: ${data.price}</h2>
                        <h2 className="card-title">User Rating: {data.rating}</h2>
                        <h2 className="card-title">Type: {data.type}</h2>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary" onClick={handleRemoveCart}>Remove from Cart</button>
                        </div>
                    </div>
                </div> :
                    <div className='flex flex-row justify-center h-full items-center'>
                        <BeatLoader color='#FF0000' margin={10} size={50}></BeatLoader>
                    </div>
            }
        </div>
    )
}

export default CartProduct