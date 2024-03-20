// Smartphones.jsx
import React, {useContext} from 'react';
import { ShopApiContext } from '../API/ShopApi';
import { MdArrowDropDown } from "react-icons/md";
import Item from '../Components/Item/Item';



const ShopCategory = (props) => {
    const { all_products } = useContext(ShopApiContext);
    return (
        <div className="">
            <img className="w-[320px] mx-auto my-0 mt-3 rounded-[100%] [box-shadow:rgba(0,_0,_0,_0.19)_0px_10px_20px,_rgba(0,_0,_0,_0.5)_0px_6px_6px]" src={props.banner} alt="" />
            <div className="mt-[24px] flex justify-center items-center text-[18px] mb-3 pb-[22px] pt-[22px]">
                <p> <span className="font-bold">1-6</span> > 100 products </p>
                <div><MdArrowDropDown /></div>
            </div>
            <div className="grid md:grid-cols-3 gap-3 sm:grid-cols-4 grid-cols-1">
                {all_products.map((item, i) => {
                    if (props.category === item.category) {
                    return <Item key={i} id={item.id} title={item.title} image={item.images} price={item.price} rating={item.rating}/>;
                    }
                    else {
                        return null;
                    }
                })}
            </div>
            <div className="flex justify-center items-center mx-auto my-[150px] w-[233px] h-[69px] rounded-lg bg-gradient-to-r from-gray-200 to-yellow-200 text-[18px] font-semibold italic">Load More</div>
        </div>
    );
}

export default ShopCategory;