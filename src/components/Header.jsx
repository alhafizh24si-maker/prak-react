import { useState } from "react";
import { FaBell, FaSearch, FaUser, FaSignOutAlt, FaCog } from "react-icons/fa";
import { FcAreaChart } from "react-icons/fc";
import { SlSettings } from "react-icons/sl";

export default function Header() {
    // State untuk menangani improvisasi
    const [isSearchFocused, setIsSearchFocused] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false);

    return (
        <div id="header-container" className="flex justify-between items-center p-6 bg-transparent relative">
            
            {/* --- IMPROVISASI 1: SEARCH BAR WITH FOCUS OVERLAY --- */}
            <div id="search-bar" className="relative w-full max-w-lg z-50">
                <input
                    onFocus={() => setIsSearchFocused(true)}
                    onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
                    id="search-input"
                    className="border-none p-3 pr-12 bg-white w-full rounded-xl shadow-sm outline-none focus:ring-2 focus:ring-hijau transition-all"
                    type="text"
                    placeholder="Search Here..."
                />
                <FaSearch id="search-icon" className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-300" />
                
                {/* Modal Search Overlay (Muncul saat input diklik) */}
                {isSearchFocused && (
                    <div className="absolute top-14 left-0 w-full bg-white shadow-2xl rounded-2xl p-5 border border-gray-100 animate-in fade-in slide-in-from-top-2 duration-300">
                        <p className="text-xs font-bold text-gray-400 uppercase mb-3 px-2">Popular Searches</p>
                        <div className="space-y-1">
                            {["Fresh Salad with Salmon", "Beef Burger King Size", "Spicy Ramen Noodles"].map((item, index) => (
                                <div key={index} className="flex items-center gap-3 text-sm text-gray-600 hover:text-hijau hover:bg-green-50 p-2 rounded-lg cursor-pointer group transition">
                                    <FaSearch className="text-gray-300 group-hover:text-hijau" />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {/* Icon & Profile Section */}
            <div id="icons-container" className="flex items-center space-x-6">
                <div className="flex space-x-4">
                    <div className="relative p-3 bg-blue-50 rounded-2xl text-blue-500 cursor-pointer hover:bg-blue-100 transition">
                        <FaBell />
                        <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-blue-500 text-white rounded-full px-1.5 py-0.5 text-[10px] border-2 border-white">50</span>
                    </div>
                    <div className="p-3 bg-blue-50 rounded-2xl cursor-pointer text-xl hover:bg-blue-100 transition">
                        <FcAreaChart />
                    </div>
                    <div className="p-3 bg-red-50 rounded-2xl text-red-500 cursor-pointer hover:bg-red-100 transition">
                        <SlSettings />
                    </div>
                </div>

                {/* --- IMPROVISASI 2: PROFILE DROPDOWN --- */}
                <div className="relative flex items-center space-x-4 border-l pl-6 border-gray-300">
                    <div className="text-right hidden md:block">
                        <p className="text-sm text-gray-500">Hello,</p>
                        <p className="text-sm font-bold text-gray-800 leading-tight">Muhammad Anugrah Alhafizh</p>
                    </div>
                    <div className="relative">
                        <img
                            onClick={() => setIsProfileOpen(!isProfileOpen)}
                            className="w-12 h-12 rounded-full border-2 border-white shadow-sm object-cover cursor-pointer hover:scale-105 transition-transform"
                            src="https://randomuser.me/api/portraits/men/32.jpg"
                            alt="profile pria"
                        />
                        
                        {/* Dropdown Menu (Muncul saat foto profil diklik) */}
                        {isProfileOpen && (
                            <div className="absolute right-0 mt-3 w-48 bg-white shadow-xl rounded-2xl py-2 border border-gray-100 z-50 animate-in zoom-in-95 duration-200">
                                <button className="w-full flex items-center gap-3 px-4 py-3 text-sm text-gray-600 hover:bg-gray-50 transition">
                                    <FaUser className="text-gray-400" /> My Profile
                                </button>
                                <button className="w-full flex items-center gap-3 px-4 py-3 text-sm text-gray-600 hover:bg-gray-50 transition">
                                    <FaCog className="text-gray-400" /> Settings
                                </button>
                                <hr className="my-1 border-gray-100" />
                                <button className="w-full flex items-center gap-3 px-4 py-3 text-sm text-red-500 hover:bg-red-50 transition font-bold">
                                    <FaSignOutAlt /> Logout
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}