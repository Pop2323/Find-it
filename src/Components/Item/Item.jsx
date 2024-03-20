import React from 'react';
import { TiStarFullOutline } from "react-icons/ti";

const Item = (props) => {
  return (
    <div className=" w-[fit-content] mx-[auto] my-[0] grid grid-cols-1 justify-center items-center gap-4 shadow-md p-[15px]">
      <img className="max-w-[50%] w-[250px] my-[0] mx-[auto] flex justify-center items-center pb-[20px] h-[125px]" src={props.image[0]} alt="Images" />
      <div className="text-center">
      <p className="flex justify-center items-center tracking-[2px] font-semibold italic pl-[15px] pr-[15px] mx-[auto] my-[0] w-[fit-content] pb-[15px]">{props.title}</p>
      <div className="m-2 border-[1px] border-[solid] border-yellow-200 w-[fit-content] pl-[20px] pr-[20px] mx-[auto] my-[0] font-bold italic bg-gradient-to-r from-gray-300 to-yellow-200 rounded-md flex items-center justify-center">${props.price}</div>
      </div>
      <div className="flex items-center justify-center gap-3"> 
        {props.rating} <TiStarFullOutline className="text-yellow-200 text-4xl [text-shadow:2px_2px_10px_black]" />
      </div>
    </div>
  );
};

export default Item;