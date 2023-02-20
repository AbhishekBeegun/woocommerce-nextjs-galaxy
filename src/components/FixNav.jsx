import React from 'react'
import Link from "next/link";
import {AiOutlineInfoCircle,AiOutlineHeart,AiOutlineUser,AiOutlineHome, AiOutlineFire} from "react-icons/ai"
 
const FixNav = () => {


  return (
    <div 
    className="fixed z-10 bottom-0 left-0 w-full h-[50px] rounded-t-lg flex justify-evenly items-center text-center p-1 bg-white font-semibold text-red-600 border">
      <Link href="/">
        <a>
        <AiOutlineHome size={25}/>
        </a>
      </Link>
      <Link href="/DEALS">
        <a>
        <AiOutlineFire size={25}/>
        </a>
      </Link>
      <Link href="/Wishlist">
        <a>
        <AiOutlineHeart size={25}/>
        </a>
      </Link>
      <Link href="/ISSUES">
        <a>
        <AiOutlineInfoCircle size={25}/>
        </a>
      </Link>
      <Link href="/Account">
        <a>
        <AiOutlineUser size={25}/>
        </a>
      </Link>
 
    </div>
  )
}

export default FixNav