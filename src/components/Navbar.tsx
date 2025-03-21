import { Phone } from "lucide-react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="flex bg-blue-500 justify-between items-center text-white w-full p-4 relative">
      <div className="relative group z-10">
        <div className="cursor-pointer font-bold">Trending Categories</div>
        <div className="absolute left-0 mt-2 w-48 bg-white text-black shadow-lg rounded-md opacity-0 invisible transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:visible z-20">
          <ul className="py-2">
            <li className="px-4 py-2 hover:bg-gray-200">
              <Link to="/">Home</Link>
            </li>
            <li className="px-4 py-2 hover:bg-gray-200">
              <Link to="/shoes">Shoes</Link>
            </li>
            <li className="px-4 py-2 hover:bg-gray-200">
              <Link to="/women-clothes">Women Clothes</Link>
            </li>
            <li className="px-4 py-2 hover:bg-gray-200">
              <Link to="/fashion">Fashion</Link>
            </li>
            <li className="px-4 py-2 hover:bg-gray-200">
              <Link to="/watch">Watch</Link>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <ul className="flex gap-6 font-bold">
          <li>
            <Link to="/" className="hover:text-gray-300">Home</Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-gray-300">About</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-gray-300">Contact</Link>
          </li>
          <li>
            <button className="cursor-pointer font-bold hover:text-gray-300">Login</button>
          </li>
        </ul>
      </div>
      <div className="flex items-center gap-2">
        <Phone size={18} />
        <span>800-123-4567</span>
      </div>
    </div>
  );
}
