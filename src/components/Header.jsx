import React from 'react'
import Link from "next/link"
import FixNav from "./FixNav"
import Sidebar from "./Sidebar"
import Cart from "./Cart/Cart"


const Header = ({categorie}) => {
  return (
    <div className="py-4 w-[100vw]">    
    <div className="flex items-center justify-evenly py-4">
    
    <Sidebar categorie={categorie}/>


    <Link href="/" className="z-10">
      <a>
      <img src="http://localhost/galaxy/wp-content/uploads/2023/02/Galaxy_Logo-01.png" width="150px" alt="Galaxy logo" /> 
      </a>
      </Link>

      <div className="flex items-center gap-2">
      <Cart/> 
      </div>
    </div>
    <FixNav/>
    </div>

  )
}

export default Header