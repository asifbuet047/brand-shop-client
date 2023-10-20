import React from 'react'

function AddProductPage() {

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const product_name = formData.get('product_name');
    const product_brand = formData.get('product_brand');
    const product_image = formData.get('product_image');
    const product_price = formData.get('product_price');
    const product_description = formData.get('product_description');
    const product_type = formData.get('product_type');
    
  }

  return (
    <div className=''>
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
        <div className="rating rating-half m-2">
          <input type="radio" name="rating-1" className="bg-green-500 mask mask-star-2 mask-half-1" />
          <input type="radio" name="rating-2" className="bg-green-500 mask mask-star-2 mask-half-2" />
          <input type="radio" name="rating-3" className="bg-green-500 mask mask-star-2 mask-half-1" />
          <input type="radio" name="rating-4" className="bg-green-500 mask mask-star-2 mask-half-2" />
          <input type="radio" name="rating-5" className="bg-green-500 mask mask-star-2 mask-half-1" />
          <input type="radio" name="rating-6" className="bg-green-500 mask mask-star-2 mask-half-2" />
          <input type="radio" name="rating-7" className="bg-green-500 mask mask-star-2 mask-half-1" />
          <input type="radio" name="rating-8" className="bg-green-500 mask mask-star-2 mask-half-2" />
          <input type="radio" name="rating-9" className="bg-green-500 mask mask-star-2 mask-half-1" />
          <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-2" />
        </div>
        <input type="submit" value="Add Product" className='btn btn-primary' />
      </form>
    </div>
  )
}

export default AddProductPage