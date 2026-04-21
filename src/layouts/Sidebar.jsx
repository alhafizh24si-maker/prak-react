import {
  FaHome,
  FaClipboardList,
  FaUsers,
  FaChartBar,
  FaPlus,
} from "react-icons/fa";
import { MdSpaceDashboard } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div
      id="sidebar"
      className="flex min-h-screen w-90 flex-col bg-white p-10 shadow-lg"
    >
      {/* Logo */}
      <div id="sidebar-logo" className="flex flex-col">
        <span
          id="logo-title"
          className="font-poppins text-[48px] text-gray-900"
        >
          Sedap{" "}
          <b id="logo-dot" className="text-hijau">
            .
          </b>
        </span>
        <span id="logo-subtitle" className="font-semibold text-gray-400">
          Modern Admin Dashboard
        </span>
      </div>

      {/* List Menu */}
      <div id="sidebar-menu" className="mt-10">
        <ul id="menu-list" className="space-y-3">
          {/* Dashboard */}
          <li>
            <Link
              id="menu-1"
              to="/"
              className="hover:text-hijau flex cursor-pointer items-center rounded-xl p-4 font-medium text-gray-600 hover:bg-green-200 hover:font-extrabold"
            >
              <MdSpaceDashboard className="mr-4 text-xl" />
              Dashboard
            </Link>
          </li>

          {/* Orders */}
          <li>
            <Link
              to="/orders"
              className="hover:text-hijau flex cursor-pointer items-center rounded-xl p-4 font-medium text-gray-600 hover:bg-green-200 hover:font-extrabold"
            >
              <FaClipboardList className="mr-4 text-xl" />
              Orders
            </Link>
          </li>

          {/* Customers */}
          <li>
            <Link
              to="/customers"
              className="hover:text-hijau flex cursor-pointer items-center rounded-xl p-4 font-medium text-gray-600 hover:bg-green-200 hover:font-extrabold"
            >
              <FaUsers className="mr-4 text-xl" />
              Customers
            </Link>
          </li>
        </ul>
      </div>

      {/* Footer */}
      <div id="sidebar-footer" className="mt-auto">
        <div
          id="footer-card"
          className="bg-hijau px-4 py-4 rounded-3xl shadow-lg mb-10 flex items-center justify-between"
        >
          <div id="footer-text" className="text-white text-sm pr-2">
            <p>Please organize your menus through button below!</p>
            <div
              id="add-menu-button"
              className="flex justify-center items-center p-2 mt-3 bg-white rounded-md space-x-2 cursor-pointer"
            >
              <span className="text-gray-600 flex items-center font-bold">
                <FaPlus className="mr-2" /> Add Menus
              </span>
            </div>
          </div>
          <img
            id="footer-avatar"
            className="w-16 h-16 rounded-full border-2 border-white shadow-sm object-cover"
            src="https://upload.wikimedia.org/wikipedia/commons/5/5f/Arnold_Poernomo_in_2022.png"
            alt="avatar koki asli"
          />
        </div>
        <span id="footer-brand" className="font-bold text-gray-400 block">
          Sedap Restaurant Admin Dashboard
        </span>
        <p id="footer-copyright" className="font-light text-gray-400">
          &copy; 2025 All Right Reserved
        </p>
      </div>
    </div>
  );
}
