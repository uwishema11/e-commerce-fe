import { Search, ShoppingCart, User, Heart } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-white p-5 shadow-lg">
      <div className="flex justify-between items-center max-w-7xl mx-auto gap-4">
        <h1 className="text-2xl font-bold text-gray-800">UC</h1>
        <div className="flex items-center">
          <select className="border border-gray-300 p-2 rounded-md text-gray-500 text-sm cursor-pointer">
            <option value="All categories">All Categories</option>
            <option value="Uncategorized">Uncategorized</option>
            <option value="Body Lotion">Body Lotion</option>
            <option value="Shoes">Shoes</option>
            <option value="Electronics">Electronics</option>
            <option value="General">General</option>
            <option value="Women Clothes">Women Clothes</option>
            <option value="Fashion">Fashion</option>
            <option value="Watch">Watch</option>
          </select>
        </div>
        <div className="relative flex items-center bg-white rounded-lg border border-gray-300 p- w-64 h-12">
          <input
            type="text"
            placeholder="Search products..."
            className="border-none w-full p-8 pl-8 text-smn text-gray-500 flex-1"
          />
          <Search
            size={18}
            className="text-gray-500 absolute left-4 cursor-pointer p-9"
          />
        </div>
        <div className="flex gap-4">
          <User
            size={20}
            className="text-gray-500 cursor-pointer transition-colors duration-300 hover:text-blue-500"
          />
          <ShoppingCart
            size={20}
            className="text-gray-500 cursor-pointer transition-colors duration-300 hover:text-blue-500"
          />
          <Heart
            size={20}
            className="text-gray-500 cursor-pointer transition-colors duration-300 hover:text-blue-500"
          />
        </div>
      </div>
    </header>
  );
}
