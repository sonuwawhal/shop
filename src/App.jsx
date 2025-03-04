import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'
import Products from './components/Products'

function App() {
  const[product,setProduct]=useState([])
  useEffect(()=>{
    console.log("Products")
   
  
    fetch('https://fakestoreapi.com/products')
    .then(res=>(res.json()))
       .then(data=>{
        console.log(data);
        setProduct(data)})
      
  }
  
 
)

  return (

  <>
    <h1>Shop</h1>
      <div className='new'>
        
      {
         product.map((item)=>
         {
          return(
          
          
            <Products title={item.title} image={item.image} price={item.price} />
            
          )
         }
      
          )
         
        }
        
   
         
        
       
      

        </div>
        </>
  )
}

export default App
