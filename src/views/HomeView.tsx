import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductType from "@/types/productType";
import Product from "../components/Product";
import useProductStore from '../store/product'

export const HomeView: React.FC = () => {

  const { products, loading, error, fetchProducts } = useProductStore();


 useEffect(() =>{
  fetchProducts();
 },[]);
 if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">
        Explore Our Latest & Greatest Products
      </h1>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Product key={product.id} props={product} />
        ))}
      </div>
    </div>
  );
};
