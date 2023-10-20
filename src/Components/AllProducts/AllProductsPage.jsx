import React, { useEffect, useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import AllProductsSlider from './AllProductsSlider';
import ProductCard from './ProductCard';
import NoProductCard from './NoProductCard';

function AllProductsPage() {
  const allProducts = useLoaderData();

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