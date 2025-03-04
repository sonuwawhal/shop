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
   
  const Product1=()=>{
    fetch('https://fakestoreapi.com/products')
    .then(res=>(res.json()))
       .then(data=>setProduct(data))
      
  }
  
 
})

  return (

  
    <>
      <div>
        <h1>Shop Now</h1>
      {
         product.map((item)=>
           (
            <Products title={item.title} img={item.img} price={item.price}/>
        ))
      }  
   
         
        
       
      

        </div>
    </>
  )
}

export default App
