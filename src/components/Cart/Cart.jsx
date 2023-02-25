import React, { useContext } from 'react'
import { useState } from "react";
import {FiShoppingBag} from "react-icons/fi"
import {AiOutlineClose,AiOutlineClear} from "react-icons/ai" 
import CartItem from './CartItem';
import { CartContext } from "pages/products/[productSlug]";
import { toast, Toaster } from "react-hot-toast";


const Cart = ({Cartdatahead}) => {

  console.log(Cartdatahead)

  const Cartdata = useContext(CartContext);
  
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
    <div>
      <Toaster/>
      {IsOpen ? <><AiOutlineClose size={25}/></>  : 
      <button onClick={() => handleCartClick()}>
        <FiShoppingBag size={25}/>
      </button>}
      <div className={`top-0 right-0 rounded-b-lg border-b border-red-300 fixed bg-white w-full h-[75vh] p-5
       ${IsOpen ? 'translate-x':'translate-x-full'}
       ease-in-out duration-300
       }`}>
        <button onClick={() => handleCartClick()}><AiOutlineClose size={25}/></button>
       <button onClick={() => clearlocalstg()}
       >{<AiOutlineClear size={25}/>}</button>
        {Cartdata.map(item =>
          <div>
            <CartItem item={item}/>
          </div>)}
      </div>
    </div>
  )
}

export default Cart