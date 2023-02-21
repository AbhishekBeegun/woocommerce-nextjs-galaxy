import React from 'react'
import Link from "next/link";
import { useState } from "react";
import {BsGrid} from "react-icons/bs";
import{IoClose} from "react-icons/io5";




const Sidebar = ({categorie}) => {


  const [isOpen, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!isOpen);
  };

  return (
    <>
    {isOpen ? <IoClose size={25} onClick={handleClick}/> : <BsGrid size={25} onClick={handleClick}/>}
    <div className={`top-0 flex flex-col z-10 right-0 fixed bg-slate-100 w-screen h-screen p-10 ${isOpen ? '-translate-x-1':'-translate-x-full'}
    ease-in-out duration-200 overflow-scroll
    }`}>
      <div className="flex gap-2">
      <button className="flex justify-center items-center py-4" onClick={handleClick}>
      <IoClose size={25}/>
      <h2 className="flex items-center justify-center text-base text-red-600 font-semibold w-[220px]">Recent Categories</h2>
      </button>
      </div>
      <div className="flex flex-wrap justify-evenly items-center gap-2 pb-4">
      {categorie && categorie.map(link => (
       
        <Link href={`/categories/${link.name}`} key={link.slug}>
        <button onClick={handleClick} className="flex items-center justify-evenly border p-2 w-full h-[150px] bg-white rounded-lg shadow">
          {/* <img src={link.image.sourceUrl} alt="link.name" className="rounded-lg" width="75px"/> */}
          <p className="text-sm uppercase font-semibold">{link.name}</p>
        </button>
        </Link>

        
      ))}
      </div>

    </div>
    </>

  )
}

export default Sidebar;
