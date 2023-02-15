import Sidebar from "components/Sidebar"
import React from 'react'
import MiniCart from "./MiniCart"
import Search from "./Search"

const Navbar = () => {
  return (
    <div className="flex w-1/2 justify-evenly items-center">
      <Search/>
      <Sidebar/>
      <MiniCart/>
    </div>
  )
}

export default Navbar