import React from 'react'
import Productforpage from "./Productforpage";



const Allproducts = ({products}) => {
  return (
    <div className="lg:px-44 py-4">
      <Productforpage products={products}/>
    </div>
  )
}

export default Allproducts