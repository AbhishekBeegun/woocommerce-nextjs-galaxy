import React from 'react'
import Link from "next/link";
import { useState } from "react";
import {CgMenuRight} from "react-icons/cg"
import{IoClose} from "react-icons/io5";




const Sidebar = () => {

  
  const [IsOpen, setIsOpen] = useState(false)
    
  function handleSideClick(){
      setIsOpen(!IsOpen)
  }


  return (
    <>
    {IsOpen ? <IoClose size={25} onClick={() => handleSideClick()}/> : <CgMenuRight size={25} onClick={() => handleSideClick()}/>}
    <div className={`top-0 flex flex-col z-10 right-0 fixed bg-white w-screen h-screen p-10 ${IsOpen ? 'translate-y':'-translate-y-full'}
    ease-in-out duration-200 overflow-hidden
    }`}>
      <div className="flex flex-col items-center h-full">
        <div className="flex justify-between items-center px-4 h-[100px] w-full">
        <Link href="/" className="z-10">
         <a>
         <img src="http://localhost/galaxy/wp-content/uploads/2023/02/Galaxy_Logo-01.png" width="100px" alt="Galaxy logo" /> 
         </a>
        </Link>

        <button onClick={() => handleSideClick()}>
        <IoClose size={25} />
        </button>
        </div>

        <div className="flex flex-col w-full gap-10 text-sm uppercase py-4 text-red-600">
          <Link href="/DEALS">
            <a className="border-b py-2 px-4">Hot Deals</a>
          </Link>
          <Link href="/Wishlist">
            <a className="border-b py-2 px-4">Wishlist</a>
          </Link>
          <Link href="/ISSUES">
            <a className="border-b py-2 px-4">Issues</a>
          </Link>
          <Link href="/Account">
            <a className="border-b py-2 px-4">Account</a>
          </Link>
          <Link href="/Other">
            <a className="border-b py-2 px-4">Others</a>
          </Link>
          
        </div>

        <div className="bg-slate-100 flex justify-center items-center w-10/12 h-14 rounded-lg ">
          <p>Appearance</p>
          <button className="bg-red-200">
            Toggle theme
          </button>
        </div>
        
      </div>

    </div>
    </>

  )
}

export default Sidebar;
