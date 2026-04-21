import { FaShoppingCart, FaTruck, FaBan, FaDollarSign, FaEllipsisV } from "react-icons/fa";
import PageHeader from "../components/PageHeader";

export default function Orders() {
    return (
        <div id="dashboard-container" className="pb-10">
           <PageHeader 
  title="Orders" 
  breadcrumb={["Home", "Management", "Orders"]}
>
  <button className="bg-hijau text-white px-6 py-3 rounded-xl font-bold shadow-md hover:bg-green-600 transition">
    + Add Orders
  </button>
</PageHeader>
        </div>
    );
}