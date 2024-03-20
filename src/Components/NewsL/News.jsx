import React from 'react'

const News = () => {
  return (
<div className="w-[80%] h-[50vh] flex flex-col items-center justify-center mx-auto px-2 md:px-0 pt-0 md:pt-[80px] mt-8 md:mt-[50px] bg-gradient-to-r from-yellow-200 to-yellow-100 rounded-tl-[100px] rounded-br-[100px] rounded-tr-none rounded-bl-[0] italic [box-shadow:2px_2px_2px_2px_rgb(0_0_0_/_20%)]">
    <h1 className="text-black font-bold text-2xl md:text-2xl text-center mb-6 md:mb-12 p-2 m-2">Get The Future Update On Your Email</h1>
    <p className="text-black font-medium text-xl md:text-2xl text-center mb-6 md:mb-10">Subscribe For More Exclusive Updates</p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-16 items-center justify-center rounded-md mx-auto my-0">
        <input className="w-full md:w-auto border-none outline-none font-serif text-center bg-white text-black py-3 px-4 md:px-6 rounded-md" type="text" placeholder="Enter Your Email" />
        <button className="w-fit mx-auto my-0 md:w-auto h-[40px] text-black bg-yellow-200 flex justify-center cursor-pointer items-center font-semibold italic rounded-[12px] p-3">Subscribe</button>
    </div>
</div>
  )
}

export default News;