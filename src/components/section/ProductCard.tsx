import React, { useEffect, useState } from "react";

import flashvector from "../../assets/flashvector.svg";
import bag1 from "../../assets/png/bag1.png";
import bag2 from "../../assets/png/bag2.png";
import shoe1 from "../../assets/png/shoe1.png";
import shoe2 from "../../assets/png/shoe2.png";

const products = [
  {
    id: 1,
    title: "Tonny Black",
    desc: "Shoulder bag-White-Plain",
    price: "69.99",
    oldPrice: "129.99",
    discount: "-40%",
    rating: 5,
    image: bag1,
  },
  {
    id: 2,
    title: "Reebok",
    desc: "Women's Powder sneakers",
    price: "112.02",
    oldPrice: "129.99",
    discount: "-40%",
    rating: 5,
    image: shoe1,
  },
  {
    id: 3,
    title: "Patso",
    desc: "Shoulder bag-Pink-Plain",
    price: "69.99",
    oldPrice: "129.99",
    discount: "-40%",
    rating: 5,
    image: bag2,
  },
  {
    id: 4,
    title: "Sketchers",
    desc: "Sport-shoe 2102",
    price: "80.00",
    oldPrice: "129.99",
    discount: "-40%",
    rating: 5,
    image: shoe2,
  },
];

const TimerItem = ({ value, label }) => {
  return (
    <div className="text-center">
      <p>{value}</p>

      <span className="block text-[10px] text-gray-400 uppercase">{label}</span>
    </div>
  );
};

const SingleCard = ({ product, timer }) => {
  const { title, desc, price, oldPrice, discount, rating, image } = product;

  return (
    <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full group">
      <div className="flex flex-col items-center mb-4">
        <span className="text-[12px] font-bold text-gray-400 uppercase">
          Deal of the Day
        </span>

        <div className="flex items-center gap-2 mt-1 text-[16px] font-bold text-[#262626]">
          {Object.entries(timer).map(([label, value], index) => (
            <React.Fragment key={label}>
              <TimerItem value={value} label={label} />

              {index !== Object.entries(timer).length - 1 && <span>:</span>}
            </React.Fragment>
          ))}
        </div>
      </div>
      <div className="w-full h-40 flex items-center justify-center mb-4 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="max-h-full object-contain group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="flex-1">
        <h3 className="font-bold text-[16px] text-[#262626]">{title}</h3>

        <p className="text-[13px] text-gray-500 mb-2 truncate">{desc}</p>

        <div className="flex items-center gap-1 text-yellow-400 text-[12px] mb-3">
          {Array.from({ length: rating }).map((_, index) => (
            <span key={index}>★</span>
          ))}

          <span className="text-gray-400 ml-1">(54)</span>
        </div>
      </div>

      <div className="flex items-center gap-2 mt-auto">
        <span className="text-[#FF4E4E] font-bold text-[18px]">${price}</span>

        <span className="text-gray-400 line-through text-[14px]">
          ${oldPrice}
        </span>

        <span className="bg-[#FF4E4E] text-white text-[10px] font-bold px-2 py-1 rounded-sm">
          {discount}
        </span>
      </div>
    </div>
  );
};

const ProductCard = () => {
  const [seconds, setSeconds] = useState(12 * 3600 + 43 * 60 + 12);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const timer = {
    hour: String(Math.floor(seconds / 3600)).padStart(2, "0"),
    min: String(Math.floor((seconds % 3600) / 60)).padStart(2, "0"),
    sec: String(seconds % 60).padStart(2, "0"),
  };

  return (
    <section className="max-w-[1260px] mx-auto mt-[84px] px-5">
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-[24px] font-bold text-black">Flash Sales</h2>

        <button className="flex items-center text-black group">
          <span className="mr-2 group-hover:underline">View all</span>

          <img src={flashvector} alt="arrow icon" />
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <SingleCard key={product.id} product={product} timer={timer} />
        ))}
      </div>
    </section>
  );
};

export default ProductCard;
