import React from 'react'
import { useState } from "react"
import { useEffect } from "react"
import Link from "next/link"
import FixNav from "./FixNav"
import Sidebar from "./Sidebar"
import CartHeader from "./Cart/CartHeader"


///cart data head pren data depuis localstorage "cart-data "send -> cart

const Navbar = ({categorie}) => {  

  const [Cartdatahead, setCartdatahead] = useState([]);

  useEffect(() => {
    const newCartData = JSON.parse(localStorage.getItem("cart-data"))
    if (newCartData)
        setCartdatahead(newCartData)
}, [])


  return (
    <div className="w-[100vw]">    
    <div className="flex items-center justify-between py-4 px-8">
    
    <Link href="/" className="z-10">
      <a>
      <img src="http://localhost/galaxy/wp-content/uploads/2023/02/Galaxy_Logo-01.png" width="100px" alt="Galaxy logo" /> 
      </a>
    </Link>
    
    <div className="flex justify-center gap-8 items-center">
      <CartHeader Cartdatahead={Cartdatahead}/>
      <Sidebar />
    </div>

    </div>

    <>
    <FixNav categorie={categorie}/>
    </>
    
    
    </div>

  )
}

export default Navbar