import React from 'react';
import logo from '../Assets/logo.png';
import './Navbar.css';
import { FaCartShopping } from "react-icons/fa6";
import { Link } from 'react-router-dom';
// import { Bars3Icon } from '@heroicons/react/24/outline';

// const Navbar = () => {
//   return (
// <div className="flex justify-between items-center p-4 shadow-md bg-gray-800">
//   <div className="flex items-center gap-4">
//     <img src={logo} alt="" style={{ width: "40px" }} />
//     <p className="text-2xl font-bold font-mono italic text-yellow-200">Find-it</p>
//   </div>
//   <ul className="md:flex items-center list-none gap-4 text-yellow-200 font-medium italic">
//     <li>Shop</li>
//     <li>Smartphones</li>
//     <li>Laptops</li>
//     <li>Groceries</li>
//   </ul>
//   <div className="flex items-center gap-4">/a
//     <button className="w-28 md:w-36 h-10 md:h-12 outline-none rounded-full text-yellow-200 font-bold cursor-pointer border-solid border-2 border-gray-700">Login</button>
//     <FaCartShopping className="text-xl md:text-sm text-yellow-200" />
//   </div>
// </div>
//   )
// }

// export default Navbar;


const Navbar = () => {
  return (
<header>
    <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <Link to="/" className="flex items-center">
                <img src={logo} className="mr-3 h-12" alt="Logo" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap font-mono italic text-yellow-200">Find-it</span>
            </Link>
            <div className="flex items-center lg:order-2">
                <Link to="/login" className="flex items-center justify-center text-center italic text-xl hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 px-4 lg:px-5 py-2 lg:py-3 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800 outline-none rounded-full text-yellow-200 font-medium cursor-pointer border-solid border border-yellow-200 mr-5"><button>Log in</button></Link>
                <Link to="/cart"><FaCartShopping className="text-4xl text-yellow-200 pr-2" /></Link>
                <div className="w-[22px] h-[22px] flex justify-center items-center -mt-[35px] -ml-[15px] rounded-[11px] text-[14px] bg-yellow-200">0</div>
                <button data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                    <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </button>
            </div>
            <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0 text-xl">
                    <li>
                        <Link to="/" className="block py-2 pr-4 pl-3 text-yellow-200 bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white" aria-current="page">Shop</Link>
                    </li>
                    <li>
                        <Link to="/smartphones" className="block py-2 pr-4 pl-3 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 text-yellow-200 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Smartphones</Link>
                    </li>
                    <li>
                        <Link to="/laptops" className="block py-2 pr-4 pl-3 text-yellow-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Laptops</Link>
                    </li>
                    <li>
                        <Link to="/watches" className="block py-2 pr-4 pl-3 text-yellow-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Watches</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</header>
  )
}

export default Navbar;