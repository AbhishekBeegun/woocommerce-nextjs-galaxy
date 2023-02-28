import React from 'react'

const CompareItem = ({items}) => {

    const title = items[0];
    const image = items[1]
    const content = items[2]
    const price = items[3]


  return (
    <div className="flex flex-col border-x px-5 h-[500px] justify-evenly items-center">
      <>
        <img src={image} className="w-[200px] h-[200px] border"/>
      </>
      <>
        <h1 className="h-[50px] text-center">{title}</h1>
      </>

      <>
        <h2 className="text-xs h-[200px]" 
        dangerouslySetInnerHTML={{__html: content}}>
        </h2>
      </>

      <div className="text-primary flex gap-5 items-center">   
        <p className="text-xs">Price</p>     
        <p className="text-center font-semibold" >Rs {price}</p>
      </div>

      
    </div>
  )
}

export default CompareItem