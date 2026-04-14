import { FaBell, FaSearch } from "react-icons/fa";
import { FcAreaChart } from "react-icons/fc";
import { SlSettings } from "react-icons/sl";

export default function Header() {
    return (
        <div id="header-container" className="flex justify-between items-center p-6 bg-transparent">
            {/* Search Bar */}
            <div id="search-bar" className="relative w-full max-w-lg">
                <input
                    id="search-input"
                    className="border-none p-3 pr-12 bg-white w-full rounded-xl shadow-sm outline-none"
                    type="text"
                    placeholder="Search Here..."
                />
                <FaSearch id="search-icon" className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-300" />
            </div>

            {/* Icon & Profile Section */}
            <div id="icons-container" className="flex items-center space-x-6">
                <div className="flex space-x-4">
                    <div id="notification-icon" className="relative p-3 bg-blue-100 rounded-2xl text-blue-500 cursor-pointer">
                        <FaBell />
                        <span id="notification-badge" className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-blue-500 text-white rounded-full px-1.5 py-0.5 text-[10px] border-2 border-white">50</span>
                    </div>
                    <div id="chart-icon" className="p-3 bg-blue-100 rounded-2xl cursor-pointer text-xl">
                        <FcAreaChart />
                    </div>
                    <div id="settings-icon" className="p-3 bg-red-100 rounded-2xl text-red-500 cursor-pointer">
                        <SlSettings />
                    </div>
                </div>

                <div id="profile-container" className="flex items-center space-x-4 border-l pl-6 border-gray-300">
                    <span id="profile-text" className="text-gray-700">
                        Hello, <b>Muhammad Anugrah Alhafizh</b>
                    </span>
                    <img
                        id="profile-avatar"
                        src="https://randomuser.me/api/portraits/men/32.jpg"
                        className="w-12 h-12 rounded-full border-2 border-white shadow-sm object-cover"
                        alt="profile pria"
                        
                     />
                </div>
            </div>
        </div>
    );
}