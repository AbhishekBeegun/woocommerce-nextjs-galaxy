import React, { useContext } from 'react'
import { toast, Toaster } from "react-hot-toast"
import {IoMdGitCompare} from "react-icons/io"
import { useEffect } from "react"
import { CompareContext } from "../Productforpage"

const Comparebtn = ({product}) => {

    const {compare,setcompare} = useContext(CompareContext);

    ///cart local storage
  useEffect(() => {
    const newCartData = JSON.parse(localStorage.getItem("compare-data"))
    if (newCartData)
        setcompare(newCartData)
  }, [])

///check if there is data in localstorage then load localstorage with required data
  useEffect(() => {
    localStorage.setItem("compare-data", JSON.stringify(compare))
    console.log("data saved")
    console.log(compare)
}, [compare])

  const handleClick = (product) => {
        setcompare([...compare,[product.title,product.image.sourceUrl,product.content,product.price]])
        
        toast("added to pu compare") 
    }
  return (
    <div className="bg-secondary p-1 rounded-lg flex items-center justify-center">
        <Toaster/>
        <button onClick={() => handleClick(product)}
        className="text-primary">
            <IoMdGitCompare size={25}/>
        </button>
    </div>
  )
}

export default Comparebtn