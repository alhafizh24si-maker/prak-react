import React from 'react';
import { Link } from 'react-router-dom'; // WAJIB: Untuk navigasi ke detail
import products from './products.json';

const Products = () => {
  return (
    <div className="p-4 md:p-8 bg-gray-50 min-h-screen">
      {/* Header Bagian Atas */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Manajemen Produk</h1>
          <p className="text-sm text-gray-500">Total: {products.length} item tersedia</p>
        </div>
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-lg text-sm font-medium transition shadow-sm active:scale-95">
          + Tambah Produk
        </button>
      </div>

      {/* Tabel Produk */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="px-6 py-4 text-xs uppercase font-semibold text-gray-600 tracking-wider">Info Produk</th>
                <th className="px-6 py-4 text-xs uppercase font-semibold text-gray-600 tracking-wider">Kategori & Brand</th>
                <th className="px-6 py-4 text-xs uppercase font-semibold text-gray-600 text-right tracking-wider">Harga</th>
                <th className="px-6 py-4 text-xs uppercase font-semibold text-gray-600 text-center tracking-wider">Stok</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {products.map((item, index) => (
                <tr key={item.id || index} className="hover:bg-blue-50/50 transition-colors group">
                  <td className="px-6 py-4">
                    {/* HUBUNGKAN KE DETAIL: Menggunakan ID dari JSON */}
                    <Link 
                      to={`/products/${item.id}`} 
                      className="font-bold text-indigo-600 hover:text-indigo-800 hover:underline decoration-2 transition-all block"
                    >
                      {item.title}
                    </Link>
                    <div className="text-xs text-gray-400 font-mono mt-1">{item.code}</div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="block text-sm font-medium text-gray-700">{item.category}</span>
                    <span className="text-xs text-gray-500 bg-gray-100 px-1.5 py-0.5 rounded mt-1 inline-block">
                      {item.brand}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <span className="text-sm font-bold text-gray-900">
                      Rp {item.price.toLocaleString('id-ID')}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className={`inline-flex items-center justify-center px-3 py-1 rounded-full text-xs font-bold shadow-sm ${
                      item.stock < 10 
                        ? 'bg-red-100 text-red-700 border border-red-200' 
                        : 'bg-green-100 text-green-700 border border-green-200'
                    }`}>
                      {item.stock} <span className="ml-1 font-normal uppercase text-[10px]">pcs</span>
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Handle jika data kosong */}
        {products.length === 0 && (
          <div className="p-10 text-center text-gray-400 italic">
            Belum ada data produk tersedia.
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;