import React from 'react'
import { useState } from "react";
import {BsListNested} from "react-icons/bs"
import{IoClose} from "react-icons/io5"

const Sidebar = () => {
const Categories = ["Phone","Tablets","Televisions","WashingMachines"]

  const [isOpen, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!isOpen);
  };
  return (
    <div onClick={handleClick}>
      {isOpen ? <IoClose size={25}/> : <BsListNested size={25}/>}
      {isOpen &&
       <div>
        {Categories.map(Categorie => (
          <div>
          <li>{Categorie}</li>
          </div>
        ))}       
       </div>}
    </div>
  )
}

export default Sidebar