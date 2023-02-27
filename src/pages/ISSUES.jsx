import Navbar from "components/Navbar"
import React from 'react'

const ISSUES = () => {
  return (
    <div>
        <Navbar/>
        <h1 className="text-3xl p-10 text-primary">ISSUES / FEATURES NOT ENABLED </h1>

        <div className="flex flex-col p-2 justify-center items-center gap-5">
            
            <p>Dark mode -- next-themes--- install not used --- due to images bg</p>
            <p>Checkout Form not created --- flowbite use for stepper</p>
            <p>User Login to implement with wp : redirect to wp much easier</p>
            <p>Cart to implement with quantity</p>
            <p>Total is hard coded --- find solution for Product.price instead Item-0- in localstorage</p>
            <p>Categorie slider -- 10 product only eg : new /phones/tv etc SLIDER SCROLL TOUCH</p>
            <p>multiple image slider for product check old ecommerce___Sanity</p>
            <p>Product Content color to change in Wordpress -- red to primary</p>
            <p>Import issues with Context -- cannot imprt properly !!!???</p>




        
        </div>

    </div>
  )
}

export default ISSUES