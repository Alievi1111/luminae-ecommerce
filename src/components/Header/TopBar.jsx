import React from "react";

import { FiSearch } from "react-icons/fi";
import fblogo from "../../assets/facebook.svg";
import instalogo from "../../assets/instagram.svg";
import telegramlogo from "../../assets/telegram.svg";
import firstlogo from "../../assets/Logo.svg";
import vector from "../../assets/vector.svg";
import searchvector from "../../assets/searchvector.svg";
import categories from "../../assets/categories.svg";
import smallarrow from "../../assets/smallarrow.svg";
import Mencosmetic from "../../assets/Mencosmetic.svg";
import Signin from "../../assets/Signin.svg";
import Favorides from "../../assets/Favorides.svg";
import Card from "../../assets/Card.svg";
import numberimg from "../../assets/numberimg.svg";
const TopBar = () => {
  const links = [
    { name: "About us", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Contact us", href: "/contact" },
    { name: "Help & support", href: "/help-support" },
  ];

  return (
    <header className="  w-full  mx-auto flex flex-col bg-white">
      <div className="flex h-24  items-start px-22.5 w-full">
        <div className="flex items-center cursor-pointer gap-[6.5px] mt-[31.5px]">
          <img
            src={firstlogo}
            alt="Luminae Logo"
            className="w-12.25 h-8.25 object-contain"
          />
          <h2 className="text-[32px] font-['Lato'] font-bold text-black leading-8 tracking-tight">
            Luminae
          </h2>
        </div>

        <div className="flex items-center w-86.25 h-10 ml-[28.5px] mt-7 border border-[#D9D9D9] rounded-sm px-3 py-2 gap-3 bg-white focus-within:border-black transition-colors">
          <input
            type="text"
            placeholder="Search Products"
            className="outline-none text-[14px] text-black placeholder:text-[#808080] font-['Lato'] flex-1"
          />

          <div className="flex items-center gap-3 border-l border-[#D9D9D9] pl-3">
            <span className="text-[14px] text-[#1A1A1A] font-['Lato'] whitespace-nowrap cursor-pointer">
              All categories
            </span>
            <img
              src={vector}
              alt="arrow"
              className="w-2.5 h-1.25 cursor-pointer"
            />
          </div>

          <div className="flex items-center justify-center border-l border-[#D9D9D9] pl-3 cursor-pointer">
            <img src={searchvector} alt="search" className="w-5 h-5" />
          </div>
        </div>

        <nav className="flex w-105 h-5 items-center justify-between ml-20 mt-9.5">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-[14px] leading-5 text-[#505050] font-['Lato'] hover:text-black transition-colors whitespace-nowrap"
            >
              {link.name}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3 w-[127.5px] h-6 mt-9.5 ml-20">
          <img src={instalogo} alt="instagram image" />
          <img src={fblogo} alt="facebook image" />
          <img src={telegramlogo} alt="telegram image" />
        </div>
      </div>
      <div className="w-full h-19.5 flex bg-[#262626]">
        <div className="flex w-[144.5px] ml-22.5 items-center mt-6.75 h-6">
          <div>
            <img src={categories} alt="categories img" />
          </div>
          <div className="ml-3 font-bold font-['Lato'] text-white">
            <h1>Categories</h1>
          </div>
        </div>
        <div
          className="flex w-36 h-5 mt-7.25 gap-4 
        "
        >
          <div className="flex ml-6">
            <h1 className="text-white text-[12px]  ">USD</h1>
            <img
              className="mb-1 cursor-pointer "
              src={smallarrow}
              alt="arrow image"
            />
          </div>
          <div className="flex">
            <h1 className="text-white text-[12px] ">English</h1>
            <img
              className="mb-1 cursor-pointer "
              src={smallarrow}
              alt="arrow image"
            />
          </div>
        </div>

        <div className="w-85.25 h-15.5 ml-36 flex mt-2">
          <img src={Mencosmetic} alt="mencosmetics image" />
          <div className="ml-2.5 mt-[8.5px]">
            <div>
              <h1 className="text-[12px]  text-white font-bold font-['Lato']">
                Weekly Men's Toiletries Coupons.
              </h1>
            </div>
            <div>
              <h1 className="text-[12px] text-gray-300 ">
                We extend exclusive discounts to our male clientele
              </h1>
            </div>
          </div>
        </div>
        <div className="w-85 h-6 mt-6.75 ml-[144.75px] flex justify-between">
          <div className="flex gap-1 cursor-pointer">
            <img src={Signin} alt="Signin img" />
            <h1 className="text-white text-[14px]">Sign in</h1>
          </div>
          <div className="flex gap-1 cursor-pointer">
            <img src={Favorides} alt="favorites img" />
            <h1 className="text-white text-[14px]">Favorites</h1>
          </div>
          <div className="flex gap-1 cursor-pointer   ">
            <img src={Card} alt="card img" />
            <h1 className="text-white text-[14px]">Card</h1>
            <img className="pl-2" src={numberimg} alt="Number img" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopBar;
