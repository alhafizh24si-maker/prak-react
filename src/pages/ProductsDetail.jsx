import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { FaArrowLeft, FaTag, FaBox, FaShoppingCart } from "react-icons/fa";

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((err) => {
        setError("Gagal memuat detail produk. Silakan coba lagi.");
      });
  }, [id]);

  if (error) return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <p className="text-red-500 font-bold mb-4">{error}</p>
      <button onClick={() => navigate(-1)} className="text-hijau font-semibold underline">Kembali</button>
    </div>
  );

  if (!product) return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-hijau"></div>
    </div>
  );

  return (
    <div className="p-4 md:p-8 max-w-5xl mx-auto">
      {/* Back Button */}
      <button 
        onClick={() => navigate(-1)}
        className="flex items-center text-gray-500 hover:text-hijau transition-colors mb-6 group"
      >
        <FaArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" />
        <span className="font-medium">Kembali ke Daftar Produk</span>
      </button>

      <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row border border-gray-100">
        {/* Product Image Section */}
        <div className="md:w-1/2 bg-gray-50 p-6 flex items-center justify-center">
          <div className="relative group">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="rounded-2xl shadow-lg transition-transform duration-500 group-hover:scale-105 w-full h-[300px] md:h-[400px] object-contain"
            />
            <div className="absolute top-4 right-4 bg-hijau text-white px-4 py-1 rounded-full text-sm font-bold shadow-md">
              Best Seller
            </div>
          </div>
        </div>

        {/* Info Section */}
        <div className="md:w-1/2 p-8 flex flex-col">
          <div className="flex-1">
            <div className="flex items-center space-x-2 mb-4">
              <span className="bg-green-100 text-hijau text-xs font-bold px-3 py-1 rounded-lg uppercase tracking-wider">
                {product.category}
              </span>
              <span className="text-gray-400 text-xs">SKU: {product.id}</span>
            </div>
            
            <h1 className="text-3xl font-black text-gray-900 mb-2 leading-tight">
              {product.title}
            </h1>
            <p className="text-gray-500 mb-6 leading-relaxed">
              {product.description || "Produk berkualitas tinggi untuk kebutuhan harian Anda yang modern."}
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100">
                <div className="flex items-center text-gray-400 text-xs mb-1 uppercase font-bold">
                  <FaTag className="mr-2" /> Brand
                </div>
                <div className="text-gray-800 font-bold italic">{product.brand}</div>
              </div>
              <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100">
                <div className="flex items-center text-gray-400 text-xs mb-1 uppercase font-bold">
                  <FaBox className="mr-2" /> Rating
                </div>
                <div className="text-gray-800 font-bold">{product.rating} / 5</div>
              </div>
            </div>
          </div>

          <div className="mt-auto border-t border-gray-100 pt-6 flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">Harga Retail</p>
              <p className="text-3xl font-black text-hijau">
                Rp {(product.price * 15000).toLocaleString("id-ID")}
              </p>
            </div>
            <button className="bg-hijau hover:bg-green-700 text-white p-4 rounded-2xl shadow-lg shadow-green-200 transition-all active:scale-95 flex items-center gap-2">
              <FaShoppingCart />
              <span className="font-bold hidden sm:block">Update Stock</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}