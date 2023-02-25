import React from 'react'
import Productforpage from "./Productforpage";



const Allproducts = ({products}) => {
  return (
    <div className="lg:px-44">
      <p>ALL PRODUCTS</p>
      <Productforpage products={products}/>
    </div>
  )
}

export default Allproducts