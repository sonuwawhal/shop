import React from 'react'

const Products = ({title,price,image}) => {
  return (
    <div className='flex'>
        <div className='one'>
           <img src={image} className='img'/>
             <p>{title}</p>
            <h3>{price}</h3>
            
      </div>
      </div>
    
  )
}

export default Products
