import React, { useState, useEffect } from 'react'
import { Rating, RoundedStar } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { BeatLoader } from 'react-spinners';
import { useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function UpdateProduct() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [rating, setRating] = useState(0);

  useEffect(() => {
    fetch(`https://brand-shop-server-gamma.vercel.app/productdetails/${id}`)
      .then((res) => res.json())
      .then((data) => { setProduct(data); setRating(data.rating) });
  }, []);

  const handleUpdate = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const name = formData.get('product_name');
    const brand = formData.get('product_brand');
    const image = formData.get('product_image');
    const price = formData.get('product_price');
    const type = formData.get('product_type');

    const updatedProduct = [name, image, type, price, rating, brand];

    fetch(`https://brand-shop-server-gamma.vercel.app/updateproduct/${product._id}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(updatedProduct)
    }).then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error('Server is down');
      }
    }).then((data) => {
      if (data.acknowledged) {
        toast.success(`${name} is successfully edited in out list`);
        navigate('/');
      } else {
        toast.error(`${name} is not edited in out list. Try later`);
      }
    })
      .catch((error) => { console.error('Fetch error', error); });
  }


  return (
    <div>
      {
        product ?
          <div>
            <div className='m-4'>
              <h1 className='text-xl lg:text-2xl xl:text-4xl font-bold text-black text-center'>Update {product.name} Details</h1>
            </div>
            <form className='flex flex-col justify-center items-center w-full h-full' onSubmit={handleUpdate}>
              <input name='product_name' type="text" placeholder={product.name} className="input input-bordered w-full max-w-xs m-2" />
              <input name='product_brand' type="text" placeholder={product.brand} className="input input-bordered w-full max-w-xs m-2" />
              <input name='product_image' type="text" placeholder={product.image} className="input input-bordered w-full max-w-xs m-2" />
              <input name='product_price' type="number" placeholder={product.price} className="input input-bordered w-full max-w-xs m-2" />
              <input name='product_type' type="text" placeholder={product.type} className="input input-bordered w-full max-w-xs m-2" />
              <div className="m-2">
                <Rating
                  style={{ maxWidth: 250 }}
                  items={10}
                  value={rating}
                  onChange={setRating}
                  itemStyles={{ itemShapes: RoundedStar, activeFillColor: '#FFB700', inactiveFillColor: '#FBF1A9' }}
                  radius='large' />
              </div>
              <input type="submit" value="Update Product" className='btn btn-primary m-2' />
            </form>
          </div>

          :
          <div className='flex flex-row justify-center h-screen items-center'>
            <BeatLoader color='#36D7B7' margin={10} size={50}></BeatLoader>
          </div>
      }
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

export default UpdateProduct