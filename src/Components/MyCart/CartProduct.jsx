import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { BeatLoader } from 'react-spinners';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content';


function CartProduct({ product }) {
    const { _id, userId, productId } = product;
    const [data, setData] = useState(null);
    const [networkError, setNetworkError] = useState(false);
    const alert = withReactContent(Swal);


    useEffect(() => {
        fetch(`http://localhost:5000/productdetails/${productId}`)
            .then((res) => {
                if (res.ok) {
                    return res.json();
                } else {
                    throw new Error('Server is down');
                }
            })
            .then((data) => { setData(data) })
            .catch((error) => { console.error('Fetch error', error); setNetworkError(true) });
    }, []);

    const handleRemoveCart = () => {

        alert.fire({
            title: 'Do You really want to delete from Cart?',
            showConfirmButton: true,
            confirmButtonText: 'Yes, I want',
            showCancelButton: true,
            cancelButtonText: "No, I don't",
            icon: 'warning',
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/removecart/${_id}`)
                    .then((res) => {
                        if (res.ok) {
                            return res.json();
                        } else {
                            throw new Error('Server is down');
                        }
                    })
                    .then((data) => console.log(data))
                    .catch((error) => { console.error('Fetch error', error); setNetworkError(true) });
            }
        });
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
                        {
                            networkError ?
                                <h1>Network error</h1> :
                                <BeatLoader color='#FF0000' margin={10} size={50}></BeatLoader>
                        }

                    </div>
            }
        </div>
    )
}

export default CartProduct