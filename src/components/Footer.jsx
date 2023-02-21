import React from 'react';
import {AiOutlineSend,AiFillFacebook,AiFillInstagram} from "react-icons/ai"

const Footer = () => {
  return (
    <footer className="flex bg-gray-100 cursor-not-allowed flex-col border-t lg:flex-row lg:justify-evenly px-4 py-10 pb-20">
        <div className="py-2">
            <h2 className="text-3xl font-semibold py-4">Get updates</h2>
            <form className="flex justify-center gap-10">
            <input className="p-4 border rounded-lg w-full" type="email" placeholder="Enter your email" />
            <button className="p-4 bg-red-600 text-white" 
            type="button">
                <AiOutlineSend size={30}/>
                </button>
            </form> 

            <h3 className="text-2xl font-semibold py-4">Receive updates, access to exclusive deals and more.</h3>
            <div className="flex gap-5 py-4">
            <AiFillFacebook size={25}/>
            <AiFillInstagram size={25}/>
            </div>
        </div>

        <div className="flex flex-wrap lg:flex-nowrap lg:items-center gap-2">
            <ul className="w-[200px] text-slate-600">
                <p className="text-xl text-red-600">Company</p>
                <li>Blog</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Testimonials</li>
            </ul>

            <ul className="w-[200px] text-slate-600">
            <p className="text-xl text-red-600">Support</p>
                <li>FAQ</li>
                <li>Privacy policy</li>
                <li>Terms and conditions</li>
                <li>Cim finance conditions</li>
            </ul>

            <ul className="w-[200px] text-slate-600">
            <p className="text-xl text-red-600">Help</p>
                <li>How to buy</li>
                <li>Delivery</li>
                <li>Promotion terms</li>
                <li>Returns</li>
            </ul>

            <ul className="w-[200px] text-xs text-slate-300">
                <p>2023 Abhishek Beegun.NEXT-WOOCOMMERCE-GRAPHQL</p>
            </ul>

        </div>
    </footer>
  )
}

export default Footer