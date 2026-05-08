import { useState } from "react";
import TopBar from "./components/Header/TopBar";
import Categories from "./components/Header/Categories";
import Hero from "./components/Hero/Hero";
import ProductCard from "./components/Flashsales/ProductCard";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <TopBar />
      <Categories />
      <Hero />
      <ProductCard />
    </div>
  );
}

export default App;
