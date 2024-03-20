import React from 'react';
import cart from '../Assets/cart.png';

const Offers = () => {
  return (
    <div className="w-[80%] h-[70vh] mx-[auto] my-[0] grid md:grid-cols-[repeat(2,_minmax(300px,_1fr))] justify-center items-center sm:grid-cols-1 px-[140px] py-[0] mb-[70px] bg-gradient-to-r from-yellow-200 to-yellow-100 mt-[70px] [box-shadow:2px_2px_2px_1px_rgb(0_0_0_/_20%)]">
        <div className="flex-1 flex flex-col justify-center mx-[auto] my-[0] w-[80%]">
            <h1 className="text-[40px] pt-[15px] talic font-serif [text-shadow:2px_2px_2px_yellow] text-[#090909] font-semibold italic">Exclusive</h1>
            <h2 className="text-black text-[30px] font-medium">Offers</h2>
            <p className="text-black text-[25px] font-medium ">Get the best deals on our products</p>
            <button className="bg-black text-yellow-200 rounded-full text-[20px] font-semibold w-[182px] h-[35px] mt-[30px] cursor-pointer flex justify-center">Shop Now</button>
        </div>
        <div className="justify-end items-center flex-1 flex w-[70%] mx-[auto] my-[0]">
            <img src={cart} alt="ecommerce" />
        </div>
    </div>
  )
}

export default Offers