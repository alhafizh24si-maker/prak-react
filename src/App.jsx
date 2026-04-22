import { useState } from "react";
import Sidebar from "./layouts/Sidebar";
import Header from "./layouts/Header";
import Dashboard from "./pages/Dashboard";
import Orders from "./pages/Orders";
import Customers from "./pages/Customers";
import ErrorPage from "./pages/ErrorPage"; // Pastikan nama filenya benar
import { Route, Routes, useParams } from "react-router-dom";
import "./assets/tailwind.css";

// 1. Data Mapping untuk Error (Sesuai Desain Space)
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

// 2. Wrapper untuk menangkap ID Error dari URL
const ErrorRouteWrapper = () => {
  const { errorCode } = useParams();
  const data = errorData[errorCode] || errorData[404]; // Default ke 404
  return <ErrorPage {...data} />;
};

function App() {
  return (
    <div id="app-container" className="bg-latar min-h-screen flex">
      <Sidebar />
      <div id="main-content" className="flex-1 flex flex-col">
        <Header />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/customers" element={<Customers />} />
          
          {/* Route Dinamis untuk Error Page */}
          <Route path="/error/:errorCode" element={<ErrorRouteWrapper />} />
          
          {/* Handle jika user ngetik URL asal */}
          <Route path="*" element={<ErrorPage {...errorData[404]} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;