import React from 'react';
import { Routes, Route, useParams, Outlet } from 'react-router-dom';

// 1. Pastikan Path Import Benar (Keluar folder layouts, masuk ke components)
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

// 2. Dummy Components (Agar tidak error 'is not defined' jika file belum ada)
const Dashboard = () => <div className="p-10 text-2xl font-bold">Dashboard Page</div>;
const Orders = () => <div className="p-10 text-2xl font-bold">Orders Page</div>;
const Customers = () => <div className="p-10 text-2xl font-bold">Customers Page</div>;

// 3. Komponen ErrorPage Sederhana (Internal)
const ErrorPage = ({ code, message, description }) => (
  <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
    <h1 className="text-9xl font-black text-gray-200">{code}</h1>
    <h2 className="text-3xl font-bold text-gray-800 mt-4">{message}</h2>
    <p className="text-gray-500 mt-2 max-w-md">{description}</p>
    <button 
      onClick={() => window.location.href = '/'}
      className="mt-6 px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
    >
      Back to Earth
    </button>
  </div>
);

// 4. Data Mapping
const errorData = {
  400: {
    code: "400",
    message: "BAD REQUEST",
    description: "The signal was lost in deep space. Your request is invalid.",
    imageUrl: "/img/ast3.jpg"
  },
  401: {
    code: "401",
    message: "UNAUTHORIZED",
    description: "Eitss! You don't have the key to enter this space station.",
    imageUrl: "/img/ast2.jpg"
  },
  403: {
    code: "403",
    message: "ACCESS FORBIDDEN",
    description: "Warning! This area is off-limits for unauthorized personnel.",
    imageUrl: "/img/ast1.jpg"
  },
  404: {
    code: "404",
    message: "PAGE NOT FOUND",
    description: "Your search has ventured beyond the known universe.",
    imageUrl: "/img/ast4.jpg"
  }
};
// 5. Wrapper Route
const ErrorRouteWrapper = () => {
  const { errorCode } = useParams();
  const data = errorData[errorCode] || errorData[404];
  return <ErrorPage {...data} />;
};

export default function MainLayout() {
  return (
    <div id="app-container" className="bg-gray-50 min-h-screen flex">
      {/* Sidebar dari components */}
      <Sidebar />
      
      <div id="main-content" className="flex-1 flex flex-col">
        {/* Header dari components */}
        <Header />
        <Outlet/>
      </div>
    </div>
  );
}