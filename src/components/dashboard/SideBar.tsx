import { Link } from "react-router-dom";
import {
  Home,
  Users,
  Package,
  ShoppingCart,
  Settings,
  LogOut,
} from "lucide-react";

export default function SideBar() {
  return (
    <div className="bg-blue-500 text-white h-screen w-64">
      <div className="space-y-4 p-4 flex flex-col items-center justify-center h-full">
        <h1 className="text-bold text-xl p-5">commerce</h1>
        <div className="flex flex-col items-center justify-center w-full">
          <ul className="space-y-4 text-lg font-semibold text-white text-center w-full p-5 border-t-2 border-b-2 border-white no-underline">
            <Link
              to="/dashboard"
              className="flex items-center space-x-2 p-2 hover:bg-blue-700 rounded"
            >
              <Home size={20} />
              <li>Dashboard</li>
            </Link>
            <Link
              to="/users"
              className="flex items-center space-x-2 p-2 hover:bg-blue-700 rounded"
            >
              <Users size={20} />
              <li>Users Management</li>
            </Link>
            <Link
              to="/products"
              className="flex items-center space-x-2 p-2 hover:bg-blue-700 rounded"
            >
              <Package size={20} />
              <li>Products Management</li>
            </Link>
            <Link
              to="/checkouts"
              className="flex items-center space-x-2 p-2 hover:bg-blue-700 rounded"
            >
              <ShoppingCart size={20} />
              <li>Checkouts</li>
            </Link>
          </ul>
          <div className="flex flex-col items-center space-y-2 mt-4">
            <Link
              to="/settings"
              className="flex items-center space-x-2 p-2 hover:bg-blue-700 rounded"
            >
              <Settings size={20} />
              <span>Settings</span>
            </Link>
            <Link
              to="/logout"
              className="flex items-center space-x-2 p-2 hover:bg-blue-700 rounded"
            >
              <LogOut size={20} />
              <span>Logout</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
// import { Link } from "react-router-dom";

// export default function SideBar() {
//   return (
//     <div className="bg-blue-500 text-white h-screen w-64">
//       <div className="space-y-4 p-4 flex flex-col items-center justify-center h-full">
//         <h1 className="text-bold text-xl p-5">commerce</h1>
//         <div className="flex flex-col items-center justify-center">
//           <ul className="space-y-4 text-lg font-semibold text-white text-center w-full p-5 border-t-2 border-b-2 border-white no-underline">
//             <li>Dashboard</li>
//             <li>Users Management</li>
//             <li>Products Management</li>
//             <li>Orders Management</li>
//             <li>Checkouts</li>
//           </ul>
//           <div>
//             <Link to="/settings" className="text-white text-lg font-semibold">
//               Settings
//             </Link>
//             <Link to="/logout" className="text-white text-lg font-semibold">
//               Logout
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
