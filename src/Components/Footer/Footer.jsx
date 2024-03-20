import React from 'react';
import logo from '../Assets/logo.png';
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-[48px] w-[90%] mx-[auto] my-[0] bg-gradient-to-r from-gray-600 to-yellow-200 mt-[30px] h-fit [box-shadow:2px_2px_2px_1px_rgb(0_0_0_/_20%)] rounded-tl-[50px] rounded-tr-[0] rounded-br-[50px] rounded-bl-[0]">
        <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-5 items-center ">
            <img className=" flex items-center justify-center w-[100px] mx-auto my-0"  src={logo} alt="Logo" />
            <p className="flex items-center justify-center text-[48px] mx-auto my-0 font-semibold italic [text-shadow:2px_2px_2px_yellow]">Find-it</p>
        </div>
        <ul className="grid md:grid-cols-4 text-xl gap-40px justify-start font-semibold italic sm:grid-cols-2 items-center w-[80%] mx-auto my-0 pb-3 mb-[12px]">
            <li className="cursor-pointer">Shop</li>
            <li className="cursor-pointer">Items</li>
            <li className="cursor-pointer">About</li>
            <li className="cursor-pointer">Contact us</li>
            <li className="cursor-pointer">Locations</li>
            <li className="cursor-pointer">Smartphones</li>
            <li className="cursor-pointer">Laptops</li>
            <li className="cursor-pointer">fragrances</li>
            <li className="cursor-pointer">skincare</li>
            <li className="cursor-pointer">groceries</li>
            <li className="cursor-pointer">home-decoration</li>
        </ul>
        <div>
                <p className="text-[28px] italic [text-shadow:2px_2px_2px_yellow] flex justify-center items-center mb-[30px]">Follow us on</p>
            <div className="grid md:grid-cols-4 gap-[20px] sm:grid-cols-1 items-center justify-center mx-[auto] my-[0] w-[100%]">
                <div>
                    <BsInstagram className="text-4xl text-gray-800" />
                </div>
                <div>
                    <FaFacebookF className="text-4xl text-gray-800" />
                </div>
                <div>
                    <FaTwitter className="text-4xl text-gray-800" />
                </div>
                <div>
                    <FaLinkedinIn className="text-4xl text-gray-800" />
                </div>
            </div>
        </div>
        <hr className="w-[60%] border-none rounded-sm bg-gray-700 h-[2px]"/>
        <div>
            <p className="text-[24px] italic [text-shadow:2px_2px_2px_yellow] font-semibold mb-[20px] text-center">© 2024 Find-it. All rights reserved</p>
        </div>
    </div>
    )
}

export default Footer;