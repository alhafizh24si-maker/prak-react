import React from 'react';

export default function FiturXyz() {
  return (
    <div className="p-8 max-w-lg mx-auto space-y-6">
      
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Halaman Fitur XYZ</h1>
        <p className="text-sm text-gray-500 mt-1">
          Pertemuan 11: Implementasi Git Branching & UI Library
        </p>
      </div>

      <hr className="border-gray-200" />

      {/* Konten Utama Menggunakan Tailwind Sederhana */}
      <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-gray-800">Uji Coba Fitur</h2>
          <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
            Aktif
          </span>
        </div>
        
        <p className="text-sm text-gray-600 leading-relaxed">
          Halaman ini berhasil dimuat menggunakan struktur routing aplikasi Sedap. 
          Dibuat pada branch <span className="font-mono bg-gray-100 px-1 py-0.5 rounded text-red-600 text-xs">fitur-xyz</span>.
        </p>

        {/* Tombol Native HTML + Tailwind */}
        <div className="pt-2">
          <button
            onClick={() => alert('Halo! Tombol sederhana ini berfungsi!')}
            className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-xl transition-colors active:scale-[0.98]"
          >
            Klik Uji Coba
          </button>
        </div>
      </div>

    </div>
  );
}