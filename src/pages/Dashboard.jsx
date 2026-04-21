import { FaShoppingCart, FaTruck, FaBan, FaDollarSign, FaEllipsisV } from "react-icons/fa";
import PageHeader from "../components/PageHeader";

export default function Dashboard() {
    const stats = [
        { id: "orders", label: "Total Orders", count: "75", icon: <FaShoppingCart />, color: "bg-hijau" },
        { id: "delivered", label: "Total Delivered", count: "175", icon: <FaTruck />, color: "bg-blue-500" },
        { id: "canceled", label: "Total Canceled", count: "40", icon: <FaBan />, color: "bg-red-500" },
        { id: "revenue", label: "Total Revenue", count: "Rp.128", icon: <FaDollarSign />, color: "bg-yellow-500" },
    ];

    // DATA UNTUK IMPROVISASI TABEL
    const recentOrders = [
        { id: "#00124", name: "Muhammad Anugrah Alhafizh", menu: "Fried XL Chicken", amount: "$33.50", status: "Delivered" },
        { id: "#00125", name: "Kadek Satria Ari Putra", menu: "Beef Burger", amount: "$25.00", status: "Pending" },
        { id: "#00126", name: "Rafif Zidane", menu: "Smash Burger", amount: "$10.00", status: "Canceled" },
        { id: "#00127", name: "Nabila Ahlam Syafitri", menu: "Iced Tea XL", amount: "$5.00", status: "Delivered" },
    ];

    return (
        <div id="dashboard-container" className="pb-10">
           <PageHeader 
  title="Dashboard" 
  breadcrumb="Welcome back, Admin" 
/>
            {/* Grid Statistik */}
            <div id="dashboard-grid" className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {stats.map((item) => (
                    <div key={item.id} className="flex items-center space-x-5 bg-white rounded-[32px] shadow-sm p-6 hover:shadow-md transition">
                        <div className={`${item.color} rounded-full p-4 text-3xl text-white`}>
                            {item.icon}
                        </div>
                        <div className="flex flex-col">
                            <span className="text-2xl font-bold text-gray-800">{item.count}</span>
                            <span className="text-gray-400 font-medium text-sm">{item.label}</span>
                        </div>
                    </div>
                ))}
            </div>

            {/* --- IMPROVISASI 3: RECENT ORDERS TABLE --- */}
            <div className="px-6 mt-4">
                <div className="bg-white p-8 rounded-[32px] shadow-sm">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-xl font-bold text-gray-800">Recent Order List</h2>
                        <button className="text-hijau font-bold text-sm hover:underline">View All</button>
                    </div>
                    
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="text-gray-400 text-sm uppercase tracking-wider border-b border-gray-50">
                                    <th className="pb-4 font-bold">Order ID</th>
                                    <th className="pb-4 font-bold">Customer</th>
                                    <th className="pb-4 font-bold">Menu</th>
                                    <th className="pb-4 font-bold">Amount</th>
                                    <th className="pb-4 font-bold">Status</th>
                                    <th className="pb-4 font-bold">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-50">
                                {recentOrders.map((order) => (
                                    <tr key={order.id} className="hover:bg-gray-50 transition-colors group">
                                        <td className="py-4 font-bold text-gray-700">{order.id}</td>
                                        <td className="py-4 text-gray-600">{order.name}</td>
                                        <td className="py-4 text-gray-500">{order.menu}</td>
                                        <td className="py-4 font-bold text-gray-800">{order.amount}</td>
                                        <td className="py-4">
                                            <span className={`px-4 py-1.5 rounded-full text-xs font-bold ${
                                                order.status === 'Delivered' ? 'bg-green-100 text-green-600' : 
                                                order.status === 'Canceled' ? 'bg-red-100 text-red-600' : 
                                                'bg-yellow-100 text-yellow-600'
                                            }`}>
                                                {order.status}
                                            </span>
                                        </td>
                                        <td className="py-4 text-gray-300">
                                            <FaEllipsisV className="cursor-pointer hover:text-gray-600" />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}