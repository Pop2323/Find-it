import React from 'react'
import  data_products  from '../Assets/all_products';
import Item from '../Item/Item.jsx';
// import './Popular.css';

const Popular = () => {
    const smartphones = data_products.filter(item => item.category === "smartphones");
    // const laptops = data_products.filter(item => item.category === "laptops");
    // const furniture = data_products.filter(item => item.category === "furniture");
    // const watch = data_products.filter(item => item.category === "mens-watches" || item.category === "womens-watches");
    return (
    <div className="flex items-center flex-col gap-5">
        <h1 className="md:text-[60px] italic font-serif md:[text-shadow:5px_4px_2px_black] tracking-[4px] md:text-yellow-300 font-semibold text-center w-[80%] mx-[auto] my-[0] sm:text-[40px] sm:[text-shadow:none] sm:text-black">Smartphones</h1>
        <hr className="w-[200px] h-[5px] rounded-[10px] bg-black"/>
        <div className="grid md:grid-cols-3 gap-3 sm:grid-cols-4 grid-cols-1">
        {smartphones.map((item, i) => {
          return <Item key={i} id={item.id} title={item.title} image={item.images} price={item.price} rating={item.rating} />;
        })}
      </div>
    </div>
    )
}

export default Popular;

//flex flex-col items-center gap-5 h-[90vh]