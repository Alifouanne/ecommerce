/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import { useQuery } from "react-query";
import { Banner, Header, ProductFeed } from "./components";
import React, { useState } from "react";
//fetcher function for React Query
const fetchProducts = async () =>
  await (await fetch("https://api.escuelajs.co/api/v1/products")).json();
const App = () => {
  //fetch api
  const { data, isError, error } = useQuery("products", fetchProducts);
  if (isError) return <h1>{error.message}</h1>;
  const [sorting, setSorting] = useState("price");
  const [categoryFilter, setCategoryFilter] = useState("");
  const handleCategoryFilter = (category) => {
    setCategoryFilter(category);
  };

  const handleSorting = (option) => {
    setSorting(option);
  };
  //fillter function
  const filteredProducts =
    data?.slice(0, 23)?.filter((product) => {
      return categoryFilter === "" || product?.category.name === categoryFilter;
    }) || [];
  //sort function
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sorting === "price") {
      return a.price - b.price;
    } else if (sorting === "title") {
      return a.title.localeCompare(b.title);
    }
    // Add more sorting options as needed
  });
  return (
    <div className="bg-deafult ">
      <Header />
      {/* fillter and sort options : you can add many choices and you can impliment as list instead of buttons */}
      <div className="flex items-center justify-center space-x-5 my-2 mx-2">
        <button onClick={() => handleCategoryFilter("")} className="btn">
          All Categories
        </button>
        <button
          onClick={() => handleCategoryFilter("Electronics")}
          className="btn"
        >
          Electronics
        </button>
        <button onClick={() => handleSorting("price")} className="btn">
          Sort by Price
        </button>
        <button onClick={() => handleSorting("title")} className="btn">
          Sort by Title
        </button>
      </div>
      <main className="max-w-screen-xl mx-auto">
        {/* Banner */}
        <Banner />
        {/* Product Feed */}
        <ProductFeed products={sortedProducts} />
      </main>
    </div>
  );
};

export default App;
