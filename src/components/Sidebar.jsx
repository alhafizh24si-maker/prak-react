import {
  FaClipboardList,
  FaUsers,
  FaPlus,
  FaExclamationCircle,
  FaLock,
  FaBan,
  FaQuestionCircle
} from "react-icons/fa";
import { MdSpaceDashboard } from "react-icons/md";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const menuClass = ({ isActive }) =>
    `flex cursor-pointer items-center rounded-xl p-4 space-x-2 transition-all duration-200
    ${isActive ? 
        "text-hijau bg-green-200 font-extrabold shadow-sm" : 
        "text-gray-600 hover:text-hijau hover:bg-green-100 hover:font-bold"
    }`;

  return (
    <div
      id="sidebar"
      className="flex min-h-screen w-80 flex-col bg-white p-10 shadow-lg"
    >
      {/* Logo */}
      <div id="sidebar-logo" className="flex flex-col">
        <span
          id="logo-title"
          className="font-poppins text-[48px] text-gray-900 leading-tight"
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
      <div id="sidebar-menu" className="mt-10 overflow-y-auto">
        <ul id="menu-list" className="space-y-3">
          {/* Main Menus */}
          <li>
            <NavLink id="menu-1" to="/" className={menuClass}>
              <MdSpaceDashboard className="mr-4 text-xl" />
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink id="menu-2" to="/orders" className={menuClass}>
              <FaClipboardList className="mr-4 text-xl" /> 
              Orders
            </NavLink>
          </li>
          <li>
            <NavLink id="menu-3" to="/customers" className={menuClass}>
              <FaUsers className="mr-4 text-xl" /> 
              Customers
            </NavLink>
          </li>

          {/* Error Testing Menus (Sesuai Instruksi) */}
          <div className="pt-4 pb-2 text-xs font-bold text-gray-400 uppercase tracking-widest">
            Error Pages
          </div>
          <li>
            <NavLink id="menu-err-400" to="/error/400" className={menuClass}>
              <FaExclamationCircle className="mr-4 text-xl text-yellow-500" /> 
              Error 400
            </NavLink>
          </li>
          <li>
            <NavLink id="menu-err-401" to="/error/401" className={menuClass}>
              <FaLock className="mr-4 text-xl text-orange-500" /> 
              Error 401
            </NavLink>
          </li>
          <li>
            <NavLink id="menu-err-403" to="/error/403" className={menuClass}>
              <FaBan className="mr-4 text-xl text-red-500" /> 
              Error 403
            </NavLink>
          </li>
          <li>
            <NavLink id="menu-err-404" to="/error/404" className={menuClass}>
              <FaQuestionCircle className="mr-4 text-xl text-blue-500" /> 
              Error 404
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Footer */}
      <div id="sidebar-footer" className="mt-auto pt-10">
        <div
          id="footer-card"
          className="bg-hijau px-4 py-4 rounded-3xl shadow-lg mb-10 flex items-center justify-between"
        >
          <div id="footer-text" className="text-white text-sm pr-2">
            <p>Please organize your menus through button below!</p>
            <div
              id="add-menu-button"
              className="flex justify-center items-center p-2 mt-3 bg-white rounded-md space-x-2 cursor-pointer transition-transform active:scale-95"
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
        <span id="footer-brand" className="font-bold text-gray-400 block text-xs">
          Sedap Restaurant Admin Dashboard
        </span>
        <p id="footer-copyright" className="font-light text-gray-400 text-xs">
          &copy; 2026 All Right Reserved
        </p>
      </div>
    </div>
  );
}