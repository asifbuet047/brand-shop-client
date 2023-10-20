import React from 'react'
import PropTypes from 'prop-types'
import Brand from './Brand'

function BrandsPage({ allbrands }) {
  const { name } = allbrands;

  return (
    <div className='flex flex-col justify-center items-center'>
      {
        name ? name.map((brand, index) => <Brand key={index} brand={brand}></Brand>) : <span></span>
      }
    </div>
  )
}

BrandsPage.propTypes = {
  allbrands: PropTypes.object,
}

export default BrandsPage
