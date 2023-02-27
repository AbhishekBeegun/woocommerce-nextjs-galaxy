import { useRouter } from "next/router"
import React from 'react'
import {AiOutlineArrowLeft} from "react-icons/ai";



const Err503 = () => {
  const router = useRouter()


  return (
    <div className="flex h-screen">

      
      <div className="bg-dark text-primary w-full flex flex-col gap-5 justify-center items-center">
      <div id="space">
      <div class="stars"></div>
      <div class="stars"></div>
      <div class="stars"></div>
      <div class="stars"></div>
      </div>
        
        
        
        
        <h1 className="text-3xl font-semibold">Under Construction</h1>
        <p className="text-lg">This part is not available for the moment.</p>
        <button className="p-2 z-50 rounded-lg flex gap-5 border border-white hover:bg-secondary hover:text-black" 
        onClick={() => router.back()}>
        <AiOutlineArrowLeft size={25}/>Back
       </button>
        
  
      </div>
    </div>
  )
}



export default Err503

