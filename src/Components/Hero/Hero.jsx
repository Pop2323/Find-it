import React from 'react'
// import { MdArrowLeft } from "react-icons/md";
import { MdArrowRight } from "react-icons/md";
// import Logoo from '../Assets/Logoo.png';
// import Watch from '../Assets/Watch.png';
import logo from '../Assets/logo.png';


const Hero = () => {
  return (
    <div className="h-screen bg-[linear-gradient(180deg,_#f2e7a2,_#e1ffea22_60%)] flex">
        <div className="flex-[1] flex flex-col justify-center gap-[20px] pl-[18px] leading-[1.1] ">
            <h2 className="text-[80px] italic font-serif [text-shadow:2px_2px_2px_yellow] text-[#090909] font-semibold text-center w-[80%] mx-[auto] my-[0]">Find-it</h2>
            <div className="flex justify-center items-center">
                        <img src={logo} alt="" className="w-[230px] h-auto flex justify-center items-center"/>
            </div>
                <div className="">
                    {/* <div className="flex items-center gap-[6px]">
                        <p className="text-[40px] color-[#171717] font-bold text-center">New > </p>
                        <img src={Watch} alt="" className="h-[240px] flex items-start justify-start"/>
                    </div> */}
                    <p className="text-[40px] color-[#171717] font-medium italic w-4/5 mx-[auto] my-[0] text-center mb-2">New Products</p>
                    <p className="text-[40px] color-[#171717] font-medium italic w-4/5 mx-[auto] my-[0] text-center mt-2">for everyone</p>
                </div>
                <div className="flex items-center justify-center gap-[15px] h-[70px] border-[2px] m-[30px] p-[30px] border-[solid] border-bg-yellow-200 rounded-[75px] text-[black] text-[medium] bg-yellow-200 w-[fit-content] mx-[auto] my-[0] [box-shadow:2px_2px_2px_1px_rgb(0_0_0_/_20%)]">
                    <div className="text-[18px] font-bold italic">Latest Collection</div>
                    <MdArrowRight className="text-[48px] flex items-center justify-center"/>
                </div>
        </div>
        <div className="flex items-center justify-center">
            {/* <img src={Logoo} alt="placeholder" className="w-[215px]"/> */}
        </div>
    </div>
  )
}

export default Hero