import React from 'react'


const Saveonsale = ({regularPrice,salePrice}) => {

    const save = regularPrice - salePrice; 

    const percentage = save / regularPrice ;

    const offby = Math.floor(percentage * 100) ;


  return (
    <div className="font-base bg-primary text-sm text-secondary border-primary border rounded-tl-lg rounded-bl-lg p-1">
      <p>Save Rs {save} | {offby}% Off</p>
    </div>
 
  )
}

export default Saveonsale