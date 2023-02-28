import React from 'react'
import { useState } from "react"
import { useEffect } from "react"
import Link from "next/link"
import FixNav from "./FixNav"
import Sidebar from "./Sidebar"
import CartHeader from "./Cart/CartHeader"
import { ThemeContext } from "pages/_app";
import { useContext } from "react"


///cart data head pren data depuis localstorage "cart-data "send -> cart

const Navbar = ({categorie}) => {
  
  const [ThemeToggle] = useContext(ThemeContext);


  const [Cartdatahead, setCartdatahead] = useState([]);

  //cart data
  useEffect(() => {
    const newCartData = JSON.parse(localStorage.getItem("cart-data"))
    if (newCartData)
        setCartdatahead(newCartData)
}, [])


  return (
    <div className="w-[100vw] lg:px-44">    
    <div className="flex items-center justify-between py-4 px-8">
    {ThemeToggle ? <Link href="/" className="z-10">
      <a>
      <img src="http://localhost/galaxy/wp-content/uploads/2023/02/Galaxy_Logo-01.png" width="100px" alt="Galaxy logo" /> 
      </a>
    </Link>:
    <Link href="/" className="z-10">
    <a>
    <img src="http://localhost/galaxy/wp-content/uploads/2023/02/361logo.png" width="50px" alt="361 logo" /> 
    </a>
    </Link>}
    
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