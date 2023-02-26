import React from 'react'
import { useState } from "react";
import {CgShoppingBag} from "react-icons/cg"
import {AiOutlineClose,AiOutlineClear} from "react-icons/ai" 
import CartItem from './CartItem';


/////cart not for productSlug.js
const CartHeader = ({Cartdatahead}) => {

  console.log(Cartdatahead)
  
  const [IsOpen, setIsOpen] = useState(false)
    
  function handleCartClick(){
      setIsOpen(!IsOpen)
  }
  function clearlocalstg(){
    window.localStorage.removeItem('cart-data');
    location.reload();
    toast.success("Cart cleared")
  }


  return (
    <div className="flex">
      {IsOpen ? <><AiOutlineClose size={25}/></>  : 
      <div className="relative">
      <button className="p-1" onClick={() => handleCartClick()}>
        <CgShoppingBag size={20}/>
      </button>
      {Cartdatahead.length > 0 ?
      <p className="absolute -top-2 -right-2 text-white font-semibold bg-red-600 rounded-full px-[6px] text-xs">{Cartdatahead.length}</p>
     : <></>}
      </div>}
      <div className={`top-0 right-0 z-10 rounded-b-lg border-b border-red-300 fixed bg-white w-full h-[75vh] p-5
       ${IsOpen ? 'translate-x':'translate-x-full'}
       ease-in-out duration-300
       }`}>
        <div className="flex px-4 justify-between">
        <button onClick={() => handleCartClick()}>
        <AiOutlineClose size={25}/>
        </button>
       <button className="flex gap-2 text-sm items-center" 
       onClick={() => clearlocalstg()}
       ><AiOutlineClear size={25}/> Clear Cart
       </button>
       </div>
       {Cartdatahead.map(item =>
          <div key={item[3]}>
            <CartItem item={item}/>
          </div>)}
      </div>
    </div>
  )
}

export default CartHeader