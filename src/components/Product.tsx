import React from "react";
import ProductProps from "@/types/productType";

const Product: React.FC<{ props: ProductProps }> = ({ props }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl p-4">
      <img
        className="w-full h-56 object-cover rounded-t-lg"
        src={props.image}
        alt={props.name}
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-900 truncate">
          {props.name}
        </h2>
        <p className="text-gray-600 text-sm mt-1 line-clamp-2">
          {props.description}
        </p>
        <div className="mt-3 flex justify-between items-center">
          <span className="text-blue-600 font-bold text-lg">
            ${props.price}
          </span>
          <button className="bg-blue-600 text-white px-2 py-1 rounded-lg text-sm hover:bg-blue-700">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
