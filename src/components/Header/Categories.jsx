import React from "react";

const Categories = () => {
  const cat = [
    { id: 1, name: "Woman", href: "/woman", active: true },
    { id: 2, name: "Male", href: "/male", active: false },
    { id: 3, name: "Mother-Child", href: "/mother-child", active: false },
    { id: 4, name: "Home & Furniture", href: "/home-furniture", active: false },
    { id: 5, name: "Super market", href: "/super-market", active: false },
    { id: 6, name: "Cosmetics", href: "/cosmetics", active: false },
    { id: 7, name: "Shoe & Bag", href: "/shoe-bag", active: false },
    { id: 8, name: "Electronic", href: "/electronic", active: false },
    { id: 9, name: "Sport & Outdoor", href: "/sport-outdoor", active: false },
    { id: 10, name: "Best seller", href: "/best-seller", active: false },
  ];

  return (
    <div className="w-full h-13 mt-7 flex justify-center items-center gap-15 bg-white border-b border-[#F0F0F0]">
      {cat.map((item) => (
        <a
          key={item.id}
          href={item.href}
          className={`text-[14px] font-lato transition-colors ${
            item.active
              ? "text-[#FF8A00] font-bold"
              : "text-[#505050] hover:text-black"
          }`}
        >
          {item.name}
        </a>
      ))}
    </div>
  );
};

export default Categories;
