export default function PageHeader(props) {
    return (
        <div id="pageheader-container" className="flex items-center justify-between p-6">
            <div id="pageheader-left" className="flex flex-col">
                <span id="page-title" className="text-3xl font-bold text-gray-800">
                    {props.title}
                </span>
                <div id="breadcrumb-links" className="flex items-center font-medium space-x-2 mt-2">
                    <span id="breadcrumb-home" className="text-hijau">{props.title}</span>
                    <span id="breadcrumb-separator" className="text-gray-400">/</span>
                    <span id="breadcrumb-current" className="text-gray-400">Order List</span>
                </div>
            </div>
            <div id="action-button">
                <button id="add-button" className="bg-hijau text-white px-6 py-3 rounded-xl font-bold shadow-md hover:bg-green-600 transition">
                    + Add New Data
                </button>
            </div>
        </div>
    );
}