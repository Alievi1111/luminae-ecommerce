import React from "react";
import flashvector from "../../assets/flashvector.svg";
const SingleCard = ({ title, desc, price, oldPrice, discount, image }) => {
  return <div></div>;
};
const ProductCard = ({ product }) => {
  return (
    <div className="max-w-315 h-10 mt-21  flex ml-22.5 justify-between ">
      <h2 className="text-[24px] font-['Lato'] text-black">Flash Sales</h2>
      <div className="flex items-center text-black ">
        <h4 className="mr-2">View all</h4>
        <img className="mr-2 mt-1" src={flashvector} alt="flashvector img" />
      </div>
    </div>
  );
};

export default ProductCard;
