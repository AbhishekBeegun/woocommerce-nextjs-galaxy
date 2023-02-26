import React from 'react'

//item[0]title

//item[1]price

//item[0]image

//item[0]id for wp


//qty need to be inplemented
const CartItem = ({item}) => {

  const title = item[0] ;
  const price = item[1];
  const image = item[2];
  const id = item[3];

 
  return (
    <div className="flex justify-evenly items-center">
    <img src={image} width="50px" className="rounded-lg" />
    <p className="text-xs text-center overflow-hidden w-1/2">{title}</p>
    <p className="font-semibold">Rs {price}</p>
    </div>
  )
}

export default CartItem