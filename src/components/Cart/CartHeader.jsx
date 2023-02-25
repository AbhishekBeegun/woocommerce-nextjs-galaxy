import React from 'react'
import { useState } from "react";
import {FiShoppingBag} from "react-icons/fi"
import {AiOutlineClose} from "react-icons/ai" 
import CartItem from './CartItem';



const CartHeader = ({Cartdatahead}) => {

  console.log(Cartdatahead)
  
  const [IsOpen, setIsOpen] = useState(false)
    
  function handleCartClick(){
      setIsOpen(!IsOpen)
  }

  return (
    <div>
      {IsOpen ? <><AiOutlineClose size={25}/></>  : 
      <button onClick={() => handleCartClick()}>
        <FiShoppingBag size={25}/>
      </button>}
      <div className={`top-0 z-10 right-0 border border-red-600 fixed bg-white w-full h-[50vh] p-5
       ${IsOpen ? 'translate-x':'translate-x-full'}
       ease-in-out duration-300
       }`}>
        <button onClick={() => handleCartClick()}><AiOutlineClose size={25}/></button>
        {Cartdatahead}
      </div>
    </div>
  )
}

export default CartHeader