import React from 'react';

export default function PageHeader({ title, breadcrumb, children }) {
  // Fungsi untuk menangani breadcrumb baik berupa string maupun array
  const renderBreadcrumb = () => {
    if (Array.isArray(breadcrumb)) {
      return breadcrumb.map((item, index) => (
        <React.Fragment key={index}>
          <span className={`${index === breadcrumb.length - 1 ? 'text-gray-400' : 'text-hijau'}`}>
            {item}
          </span>
          {index < breadcrumb.length - 1 && (
            <span className="text-gray-400 mx-1">/</span>
          )}
        </React.Fragment>
      ));
    }
    // Jika breadcrumb hanya string
    return <span className="text-gray-400">{breadcrumb}</span>;
  };

  return (
    <div id="pageheader-container" className="flex items-center justify-between p-6 bg-transparent">
      <div id="pageheader-left" className="flex flex-col">
        {/* Title Dinamis */}
        <h1 id="page-title" className="text-3xl font-bold text-gray-800">
          {title}
        </h1>

        {/* Breadcrumb Dinamis */}
        <div id="breadcrumb-links" className="flex items-center font-medium mt-1">
          {renderBreadcrumb()}
        </div>
      </div>

      {/* Children Dinamis (Tempat Tombol Add Orders / Add Customer) */}
      <div id="action-button">
        {children}
      </div>
    </div>
  );
}