import React from "react";
import flashvector from "../../assets/flashvector.svg";
import trendingfirst from "../../assets/png/trendingfirst.png";
import trendingsecond from "../../assets/png/trendingsecond.png";
import trendingthird from "../../assets/png/trendingthird.png";

const products = [
  {
    id: 1,
    title: "Cool & Sexy Calvin Klein",
    desc: "Dotted dress-Casual",
    price: "89",
    image: trendingfirst,
  },
  {
    id: 2,
    title: "Cool & Sexy Calvin Klein",
    desc: "Dotted dress-Casual",
    price: "89",
    image: trendingsecond,
  },
  {
    id: 3,
    title: "beige coat Zara",
    desc: "Cream-Brown-Formal",
    price: "102",
    image: trendingthird,
  },
];

const Trending = () => {
  return (
    <section className="max-w-[1260px] mx-auto mt-[84px] px-5 font-['Lato']">
      <div className="flex justify-between items-center mb-[20px]">
        <h2 className="text-[24px] font-bold text-black ">
          Trending must-haves
        </h2>
        <button className="flex items-center text-[#262626] text-[14px] group">
          <span className="mr-2 ">View all</span>
          <img src={flashvector} alt="arrow" className="w-3 h-3" />
        </button>
      </div>

      <div className="grid lg:grid-cols-3 gap-[50px]">
        {products.map((product) => (
          <div key={product.id} className="flex flex-col   border-[#E5E5E5]">
            <div className="relative h-[340px] w-full ">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover "
              />
            </div>

            <div className="bg-[#262626] p-[20px] text-white flex justify-between items-center">
              <div>
                <h3 className="text-[16px] font-bold ]">{product.title}</h3>
                <p className="text-[#A3A3A3] text-[13px] font-normal ]">
                  {product.desc}
                </p>
              </div>

              <button className="border border-[#525252] cursor-pointer rounded-2xl border-[2px] px-[15px] py-[8px] flex items-center gap-2 hover:bg-white hover:text-black transition-all duration-300">
                <span className="text-[14px] font-bold">${product.price}</span>
                <span className="text-[12px] ">Shop Now</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Trending;
