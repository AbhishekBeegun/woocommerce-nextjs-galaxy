import React, { useContext } from 'react'
import Link from "next/link";
import { useState } from "react";
import {CgMenuRight} from "react-icons/cg"
import{IoClose} from "react-icons/io5";
import { ThemeContext } from "pages/_app";
import { toast, Toaster } from "react-hot-toast";



const Sidebar = () => {

  const [ThemeToggle,setThemeToggle] = useContext(ThemeContext);


  
  const [IsOpen, setIsOpen] = useState(false)
    
  function handleSideClick(){
      setIsOpen(!IsOpen)
  }

  function ChangeTheme(){
    setThemeToggle(!ThemeToggle);
    toast.success("Theme Changed Do not Refresh the page because localStorage is not used for Theme",{
      duration:5000,
    })
    
  }


  return (
    <>
    <Toaster/>
    {IsOpen ? 
    <button onClick={() => handleSideClick()}>
    <IoClose size={25}/>
    </button>
     : 
     <button onClick={() => handleSideClick()}>
     <CgMenuRight size={25} />
     </button>
     }
    <div className={`top-0 flex flex-col z-10 right-0 fixed bg-secondary w-screen h-screen p-10 ${IsOpen ? 'translate-y':'-translate-y-full'}
    ease-in-out duration-200 overflow-hidden
    }`}>
      <div className="flex flex-col items-center h-full">
        <div className="flex justify-between items-center px-4 h-[100px] w-full">
        
        {ThemeToggle ?
        <Link href="/" className="z-10">
         <a>
         <img src="http://wpnextecommerce.byethost10.com/wp-content/uploads/2023/03/Galaxy_Logo-01.png" width="100px" alt="Galaxy logo" /> 
         </a>
        </Link>:
        <Link href="/" className="z-10">
         <a>
         <img src="http://wpnextecommerce.byethost10.com/wp-content/uploads/2023/03/361logo.png" width="50px" alt="361 logo" /> 
         </a>
        </Link>}
        
        <button onClick={() => handleSideClick()}>
        <IoClose size={25} />
        </button>
        </div>

        <div className="flex flex-col w-full gap-10 text-sm uppercase py-4 text-primary">
          <Link href="/DEALS">
            <a className="border-b py-2 px-4">Hot Deals **</a>
          </Link>
          <Link href="/COMPAREPAGE">
            <a className="border-b py-2 px-4">Compare**</a>
          </Link>
          <Link href="/ISSUES">
            <a className="border-b py-2 px-4">Issues**</a>
          </Link>
          <Link href="/Err503">
            <a className="border-b py-2 px-4">Account</a>
          </Link>
          <Link href="/Err503">
            <a className="border-b py-2 px-4">Others</a>
          </Link>
          <p>** Page Available</p>
          
        </div>

      
          <button className="flex items-center gap-10 border px-10 py-2 rounded-lg text-primary border-black" 
          onClick={() => ChangeTheme()}>
          <p>Change Theme</p>
          {!ThemeToggle ?
          <Link href="/" className="z-10">
          <a>
          <img src="http://localhost/galaxy/wp-content/uploads/2023/02/Galaxy_Logo-01.png" width="100px" alt="Galaxy logo" /> 
          </a>
          </Link>:
          <Link href="/" className="z-10">
          <a>
          <img src="http://localhost/galaxy/wp-content/uploads/2023/02/361logo.png" width="50px" alt="361 logo" /> 
          </a>
          </Link>}

          </button>
             
      </div>

    </div>
    </>

  )
}

export default Sidebar;
