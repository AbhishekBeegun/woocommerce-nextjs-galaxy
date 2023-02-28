import Navbar from "components/Navbar"
import { useState } from "react";
import { useEffect } from "react";
import React from 'react'
import CompareItem from "components/Compare/CompareItem";
import Footer from "components/Footer";
import { Toaster,toast } from "react-hot-toast";
import {AiOutlineClear} from "react-icons/ai" 

const Comparepage = () => {



  const [Comparedata, setComparedata] = useState([]);

  useEffect(() => {
    const newCartData = JSON.parse(localStorage.getItem("compare-data"))
    if (newCartData)
        setComparedata(newCartData)
}, [])


function clearlocalstg(){
  window.localStorage.removeItem('compare-data');
  location.reload();
  toast.success("Compare cleared")
}

  return (
    <div className="compare">
      <Toaster/>
      <Navbar/>
      <div className="flex gap-10 overflow-scroll px-5 py-4 border">
      {Comparedata.length > 0 && Comparedata.map(items => 
      <div key={items[0]}>
        <CompareItem items={items}/>
      </div>
      )}

      {Comparedata <= 0 &&  <div>
       <p className="text-primary">EMPTY Add Item to compare.</p>
       </div>}
    </div>

    <button onClick={() => clearlocalstg()} 
    className="flex gap-10 font-semibold bg-primary text-secondary py-2 px-4 rounded-lg items-center">
      <p>Clear Comparison</p>
      <AiOutlineClear size={30}/>
    </button>

    <Footer/>
 
    </div>
  )
}

export default Comparepage