import {
  FaShoppingCart,
  FaTruck,
  FaBan,
  FaDollarSign,
  FaEllipsisV,
} from "react-icons/fa";
import PageHeader from "../components/PageHeader";

export default function Customers() {
  return (
    <div id="dashboard-container" className="pb-10">
      <PageHeader title="Customers" breadcrumb={["Home", "User List"]}>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-xl font-bold shadow-md hover:bg-blue-700 transition">
          + Add Customer
        </button>
      </PageHeader>
    </div>
  );
}
