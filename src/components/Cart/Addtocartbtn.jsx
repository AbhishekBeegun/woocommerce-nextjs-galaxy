import React from 'react'
import Link from "next/link"
import { useState } from "react";
import { useEffect } from "react";


const Addtocartbtn = ({products}) => {
  
  function handleadd() {
    {products && products.map(product => {
      setcartitems(product.title)
    })}
    setstore(!store)
    console.log(cartitems)
  }

  

  const [store, setstore] = useState(true)
  const [cartitems, setcartitems] = useState([]);


  useEffect(() => {
    console.log("localstorage ran")

  }, [store])
 
   
  return (
    <>
      <button onClick={handleadd}
      className="border rounded-lg border-red-600 w-28 h-10 text-xs bg-red-600 text-white">ADD TO CART</button>
    </>
  )
}

export default Addtocartbtn