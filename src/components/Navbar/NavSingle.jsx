import React from 'react'
import Link from "next/link";
import {AiOutlineArrowLeft} from "react-icons/ai";
import Cart from "./Cart";
import { useRouter } from 'next/router'


const NavSingle = () => {
  const router = useRouter()
  return (
    <div className="fixed top-0 w-full flex justify-between text-red-600 px-4 py-4">
      <button className="p-2 rounded-lg bg-white" 
      onClick={() => router.back()}>
        <AiOutlineArrowLeft size={25}/>
      </button>
      <div className="p-2 rounded-lg bg-white">
        <Cart/>
      </div>
    </div>
  )
}

export default NavSingle