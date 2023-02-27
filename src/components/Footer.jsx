import React from 'react';
import {AiOutlineSend,AiFillFacebook,AiFillInstagram} from "react-icons/ai"

const Footer = () => {
  return (
    <footer className="flex bg-gray-100 cursor-not-allowed flex-col border-t lg:flex-row lg:justify-evenly px-4 py-10 pb-20">
        <div className="py-2">
            <h2 className="text-xl font-semibold py-2 uppercase">Get updates</h2>
            <form className="flex justify-center gap-10">
            <input className="p-2 border rounded-lg w-full" type="email" placeholder="Enter your email" />
            <button className="p-2 bg-primary text-secondary rounded-lg" 
            type="button">
                <AiOutlineSend size={30}/>
                </button>
            </form> 

            <h3 className="text-lg font-semibold py-4 uppercase">Receive updates, access to exclusive deals and more.</h3>
            <div className="flex gap-5 py-4">
            <AiFillFacebook size={25}/>
            <AiFillInstagram size={25}/>
            </div>
        </div>

        <div className="flex flex-wrap lg:flex-nowrap justify-evenly items-center gap-5">
            <div className="w-[150px] text-slate-600">
                <p className="text-xl text-primary">Company</p>
                <li>Blog</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Testimonials</li>
            </div>

            <div className="w-[150px] text-slate-600">
            <p className="text-xl text-primary">Help</p>
                <li>How to buy</li>
                <li>Delivery</li>
                <li>Promotion terms</li>
                <li>Returns</li>
            </div>

            <div className="w-[200px] text-slate-600">
            <p className="text-xl text-primary">Support</p>
                <li>FAQ</li>
                <li>Privacy policy</li>
                <li>Terms and conditions</li>
                <li>Cim finance conditions</li>
            </div>



            <div className="w-[100px] text-xs text-slate-300 flex justify-center items-center">
                <p>2023 Abhishek Beegun.NEXT-WOOCOMMERCE-GRAPHQL</p>
            </div>

        </div>
    </footer>
  )
}

export default Footer