import React from 'react'

const FixNav = () => {

const linksto = ["HOT DEALS","NEW ARRIVALS","SHOP BY BRANDS","ISSUES","MY ACCOUNT","OTHERS"];

  return (
    <div className="flex flex-wrap gap-10 justify-center p-2">
      {linksto.map(link => (
        <li className="bg-red-600 text-white font-semibold list-none p-2 rounded-full">
          {link}
        </li>
      ))}

    </div>
  )
}

export default FixNav