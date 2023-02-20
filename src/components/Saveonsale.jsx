import React from 'react'


const Saveonsale = ({regularPrice,salePrice}) => {

    const save = regularPrice - salePrice; 

    const percentage = save / regularPrice ;

    const offby = Math.floor(percentage * 100) ;


  return (
    <div className="font-base bg-red-500 text-sm text-white border-red-600 border rounded-tl-lg rounded-bl-lg p-1">
      <p>Save Rs {save} | {offby}% Off</p>
    </div>
 
  )
}

export default Saveonsale