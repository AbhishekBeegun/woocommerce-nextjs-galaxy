import React from 'react'
import {AiOutlineArrowLeft} from "react-icons/ai";
import { useRouter } from 'next/router'
import Cart from "components/Cart/Cart";


const NavSingle = () => {
  const router = useRouter()
  return (
    <div className="fixed top-0 w-full flex justify-between text-primary px-4 py-4">
      <button className="p-2 rounded-lg bg-secondary" 
      onClick={() => router.back()}>
        <AiOutlineArrowLeft size={25}/>
      </button>
      
      <div className="p-2 rounded-lg bg-secondary">
      <Cart/>
      </div>
    </div>
  )
}

export default NavSingle