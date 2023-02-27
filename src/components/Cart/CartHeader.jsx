import React, { useState } from 'react'

import Link from "next/link";
import {AiOutlineClose,AiOutlineClear} from "react-icons/ai" 
import CartItem from './CartItem';
import {FiShoppingBag} from "react-icons/fi"


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
      <div className="relative flex">
      <button onClick={() => handleCartClick()}>
        <FiShoppingBag size={20}/>
      </button>
      {Cartdatahead.length > 0 ?
      <p className="absolute -top-3 -right-3 text-secondary bg-primary rounded-full font-semibold px-[6px] text-xs">{Cartdatahead.length}</p>
     : <></>}
      </div>}



      <div className={`top-0 z-50 right-0 flex flex-col justify-between rounded-b-lg border-b border-primary fixed bg-secondary w-full h-[70vh] 
       ${IsOpen ? 'translate-x':'translate-x-full'}
       ease-in-out duration-300
       }`}>
        <div className="flex px-4 py-2 justify-between border-b">
        <button className="p-2 rounded-lg bg-secondary"
        onClick={() => handleCartClick()}>
        <AiOutlineClose size={25}/>
        </button>
       <button className="flex gap-2 text-sm items-center " 
       onClick={() => clearlocalstg()}
       ><AiOutlineClear size={25}/> Clear Cart
       </button>
       </div>

       <div className="overflow-scroll max-h-[50vh] border-y">
        {Cartdatahead.map(item =>
          <div className="flex flex-col py-4" key={item[3]}>
            <CartItem item={item}/>
          </div>)}
        </div>

        <div className="flex items-center justify-between px-4 py-4 border-t">
        <p>Total N/a</p>
        <Link href="/Err503">
          {/* take cartdata and send to create account  */}
         <a className="bg-primary text-secondary px-2 py-2 rounded-lg ">Checkout</a>
        </Link>
        </div>
      </div>
    </div>
  )
}

export default CartHeader