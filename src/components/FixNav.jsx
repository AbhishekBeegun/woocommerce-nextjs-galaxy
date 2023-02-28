import React from 'react'
import Link from "next/link";
import { useState } from "react";
import {CgMenuLeftAlt} from "react-icons/cg"
import{IoClose} from "react-icons/io5";
import{AiOutlineUser} from "react-icons/ai"
import {IoMdGitCompare} from "react-icons/io"



const FixNav = ({categorie}) => {

  const [IsOpen, setIsOpen] = useState(false);
  function handlenavClick(){
    setIsOpen(!IsOpen)
}



  return (
    <nav className="w-full flex justify-between items-center py-2 px-8 bg-secondary border-y">
       {IsOpen ? 
       <button onClick={() => handlenavClick()}>
       <IoClose size={20} />
        </button>: 
       <div className="flex justify-between w-full text-sm">
       <button className="flex gap-2 items-center justify-center"
        onClick={() => handlenavClick()}>
        <CgMenuLeftAlt />
        Categories
       </button>
         
      <Link href="/COMPAREPAGE">
       <a className="flex gap-1 items-center justify-center">
        <IoMdGitCompare/>
        <p>Compare</p>
       </a>
       </Link>

       <button className="flex gap-1 items-center justify-center"><AiOutlineUser/> User</button>
       </div>}
    
    {/* Categories */}
    <div className={`top-0 flex flex-col z-10 right-0 fixed bg-secondary w-screen h-screen p-8 ${IsOpen ? '-translate-x-1':'-translate-x-full'}
    ease-in-out duration-200 overflow-scroll
    }`}>
      <div className="flex py-4">
      <button className="flex justify-center items-center py-2" onClick={() => handlenavClick()}>
      <IoClose size={25}/>
      <h2 className="flex items-center justify-center text-base text-primary font-semibold w-[250px]">Shop by BRAND / CATEGORIES</h2>
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