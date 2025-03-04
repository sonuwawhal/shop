import React from 'react'

const Products = ({title,img,price}) => {
  return (
    <div key={id}>
        <img src={img}/>
      <h2>{title}</h2>
      <h3>{price}</h3>
    </div>
  )
}

export default Products
