import { useState } from "react";
import TopBar from "./components/Header/TopBar";
import Categories from "./components/Header/Categories";
import Hero from "./components/Hero/Hero";
import ProductCard from "./components/section/ProductCard";
import Trending from "./components/section/Trending";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <TopBar />
      <Categories />
      <Hero />
      <ProductCard />
      <Trending />
    </div>
  );
}

export default App;
