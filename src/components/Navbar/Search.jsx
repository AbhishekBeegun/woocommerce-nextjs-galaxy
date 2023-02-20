import React from 'react'
import { useState } from "react";
import {IoSearch} from "react-icons/io5";
import {AiOutlineClose} from "react-icons/ai" 

const Search = () => {
  const [Searchform, setSearchform] = useState(false);
  return (
<>
     {Searchform ? <></>  : <IoSearch size={25} onClick={() => setSearchform(!Searchform)}/>}
      <div className={`top-0 right-0 z-10 rounded-lg fixed bg-white w-[100vw] h-[100vh] p-5 ${Searchform ? 'translate-y-1':'translate-y-full'}
       ease-in-out duration-300
       }`}>
        <div className="flex flex-col gap-5">
        <button onClick={() => setSearchform(!setSearchform)}><AiOutlineClose size={25}/></button>
        <form className="border">
        <input className="h-12 p-2 w-full" 
        type="text" placeholder="Searching For . . ."></input>
        </form>
        </div>

      </div>
{/* <form className="">
    <div className="flex border border-red-600 ">
      <>
      <select className="w-14">
        <option>All</option>
        <option>Smartphones</option>
        <option>Laptopss</option>
      </select>
      </>

      <>
      <input type="text" placeholder="Searching For..."></input>
      </>

      <>
      </>
       
    </div>
</form> */}

      
      {/* <button className="p-2"><IoSearch size={25}/></button> */}
</>


  )
}

export default Search

