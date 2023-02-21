import React from 'react'
import Link from "next/link";
import {AiOutlineInfoCircle,AiOutlineHeart,AiOutlineUser,AiOutlineHome, AiOutlineFire} from "react-icons/ai"
 
const FixNav = () => {


  return (
    <nav className="fixed z-10 bottom-0 left-0 w-full h-[50px] rounded-t-lg flex justify-evenly items-center p-1 bg-white font-semibold text-red-600 border">
      <Link href="/" >
        <a title="Home" 
        className="flex flex-col items-center active:scale-150">
        <AiOutlineHome size={25}/>
       
        </a>
      </Link>
      <Link href="/DEALS">
        <a title="HOT DEALS" className="flex flex-col items-center">
        <AiOutlineFire size={25}/>
        
        </a>
      </Link>
      <Link href="/Wishlist">
        <a title="Wishlist" className="flex flex-col items-center">
        <AiOutlineHeart size={25}/>
      
        </a>
      </Link>
      <Link href="/ISSUES">
        <a title="ISSUEs" className="flex flex-col items-center">
        <AiOutlineInfoCircle size={25}/>
      
        </a>
      </Link>
      <Link href="/Account">
        <a title="Account" 
        className="flex flex-col items-center">
        <AiOutlineUser size={25}/>
    
        </a>
      </Link>
 
    </nav>
  )
}

export default FixNav