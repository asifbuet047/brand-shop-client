import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import AllProductsSlider from './AllProductsSlider';
import ProductCard from './ProductCard';
import NoProductCard from './NoProductCard';

function AllProductsPage() {
  const { name } = useParams();
  const [allProducts, setAllProducts] = useState([]);
  console.log(allProducts);

  useEffect(() => {
    fetch(`http://localhost:5000/allproducts/${name}`)
      .then((res) => res.json())
      .then((data) => setAllProducts(data));
  }, []);

  return (
    <div>
      <AllProductsSlider></AllProductsSlider>
      <div className=''>
        {
          allProducts.length > 0 ?
            allProducts.map((product, index) => <ProductCard key={index} product={product}></ProductCard>)
            : <NoProductCard brand={name}></NoProductCard>
        }
      </div>
    </div>
  )
}

export default AllProductsPage