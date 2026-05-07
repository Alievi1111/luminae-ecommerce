import React from "react";
import summeressentials from "../../assets/summeressentials.svg";
import left from "../../assets/png/left.png";
import right from "../../assets/png/right.png";
import shopicon from "../../assets/shopicon.svg";

const Hero = () => {
  return (
    <section className="relative w-full h-[460px] mt-[28px] flex overflow-hidden bg-white">
      <div className="w-[547px] h-full flex-shrink-0">
        <img src={left} alt="models" className="w-full h-full object-cover" />
      </div>

      <div className="flex-1 h-full bg-[#7DA9E7] flex flex-col justify-center items-center text-white px-10 relative text-center">
        <div className="relative ">
          <h2 className="text-[32px] font-lato font-bold uppercase tracking-widest leading-tight">
            Kimonos, Caftans & Pareos
          </h2>
          <p className="mt-[32px] text-[28px] font-lato opacity-90">
            Poolside glam included From $4.99
          </p>

          <div className="mt-[32px] flex justify-center">
            <button className="flex items-center bg-[#4676C8] hover:bg-[#262626] transition-colors duration-1000 ease-in-out text-white px-10 py-3 rounded-sm gap-2 uppercase font-bold text-[14px] cursor-pointer">
              <img src={shopicon} alt="icon" className="w-4 h-4" />
              <span>Shop now</span>
            </button>
          </div>
        </div>
      </div>

      <img
        src={summeressentials}
        alt="Summer Essentials"
        className="absolute top-1/2 left-[547px] -translate-x-1/2 -translate-y-1/2 z-10 w-[228px] h-auto "
      />
    </section>
  );
};

export default Hero;
