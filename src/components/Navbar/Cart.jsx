import React from 'react';
import {FiShoppingBag} from "react-icons/fi"
import {AiOutlineClose} from "react-icons/ai" 
import { useState } from "react";

const Cart = () => {

  const [Iscartopen, setIscartopen] = useState(false);

  return (
    <div>
      {Iscartopen ? <>X</>  :  <FiShoppingBag size={25} onClick={() => setIscartopen(!Iscartopen)}/>}
      <div className={`top-5 z-10 right-0 rounded-lg border border-red-600 fixed bg-white w-[50vw] h-[50vh] p-5 ${Iscartopen ? 'translate-x-1':'translate-x-full'}
       ease-in-out duration-300
       }`}>
        <button onClick={() => setIscartopen(!Iscartopen)}><AiOutlineClose size={25}/></button>
      </div>
    </div>
  )
}

export default Cart