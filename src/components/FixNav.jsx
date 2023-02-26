import React from 'react'
import Link from "next/link";
import { useState } from "react";
import {CgMenuLeftAlt} from "react-icons/cg"
import{IoClose} from "react-icons/io5";



const FixNav = ({categorie}) => {

  const [IsOpen, setIsOpen] = useState(false);
  function handlenavClick(){
    setIsOpen(!IsOpen)
}




  return (
    <nav className="w-full flex justify-between items-center py-2 px-8 bg-white border">
       {IsOpen ? 
       <button onClick={() => handlenavClick()}>
       <IoClose size={20} />
        </button>: 
       <div className="flex justify-between w-full text-sm">
       <button className="flex gap-2 items-center"
        onClick={() => handlenavClick()}>
        <CgMenuLeftAlt size={20} />
        Categories
       </button>

       <p>User</p>
       </div>}
    <div className={`top-0 flex flex-col z-10 right-0 fixed bg-white w-screen h-screen p-8 ${IsOpen ? '-translate-x-1':'-translate-x-full'}
    ease-in-out duration-200 overflow-scroll
    }`}>
      <div className="flex py-4">
      <button className="flex justify-center items-center py-2" onClick={() => handlenavClick()}>
      <IoClose size={25}/>
      <h2 className="flex items-center justify-center text-base text-red-600 font-semibold w-[220px]">Recent Categories</h2>
      </button>
      </div>


      
      <div className="flex flex-col justify-evenly gap-10 pb-4">
      {categorie && categorie.map(link => (
       
        <Link href={`/categories/${link.name}`} key={link.slug}>
        <button className="flex items-center justify-between border-b" 
        onClick={() => handlenavClick()}>
          {/* <img src={link.image.sourceUrl} alt="link.name" className="rounded-lg" width="75px"/> */}
          <p className="text-sm uppercase px-4 py-2">{link.name}</p>
        </button>
        </Link>

        
      ))}
      </div>

    </div>

    </nav>
  )
}

export default FixNav