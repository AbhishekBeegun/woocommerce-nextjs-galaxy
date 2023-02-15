import React from 'react'
import FixNav from "./FixNav"
import Navbar from "./Navbar/Navbar"


const Header = () => {
  return (
    <div className="py-4">    
    <div className="flex items-center justify-around p-4">
      <img src="http://localhost/galaxy/wp-content/uploads/2023/02/Galaxy_Logo-01.png" width="150px" alt="Galaxy logo" /> 
      <Navbar/>
    </div>
    <FixNav/>
    </div>

  )
}

export default Header