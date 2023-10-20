import React, { useEffect, useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import AllProductsSlider from './AllProductsSlider';
import ProductCard from './ProductCard';
import NoProductCard from './NoProductCard';
import { BeatLoader } from 'react-spinners';

function AllProductsPage() {
  const { name } = useParams();
  const [allProducts, setAllProducts] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/allproducts/${name}`)
      .then((res) => res.json())
      .then((data) => setAllProducts(data));
  }, []);

  return (
    <div>
      <AllProductsSlider></AllProductsSlider>
      {
        allProducts ?
          <div>
            {
              allProducts.length > 0 ?
                allProducts.map((product, index) => <ProductCard key={index} product={product}></ProductCard>)
                : <NoProductCard brand={" "}></NoProductCard>
            }
          </div> :
          <div className='flex flex-row justify-center h-screen items-center'>
            <BeatLoader color='#36D7B7' margin={10} size={50}></BeatLoader>
          </div>
      }

    </div>
  )
}

export default AllProductsPage