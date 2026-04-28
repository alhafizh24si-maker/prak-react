import React, { useState } from "react";
import { Route, Routes, useParams } from "react-router-dom";
import "./assets/tailwind.css";
// import MainLayout from "./layouts/MainLayout";
// import AuthLayout from "./layouts/AuthLayout";

// const Dashboard = React.lazy(() => import("./pages/Dashboard"))
// import Orders from "./pages/Orders"
// import Customers from "./pages/Customers"
// import ErrorPage from "./pages/NotFound";
// import Login from "./pages/auth/Login";
// import Register from "./pages/auth/Register";
// import Forgot from "./pages/auth/Forgot";
// import ErrorPage from "./pages/NotFound";

const Dashboard = React.lazy(() => import("./pages/Dashboard"))
const Orders = React.lazy(() => import("./pages/Orders"))
const Customers = React.lazy(() => import("./pages/Customers"))
const ErrorPage = React.lazy(() => import("./pages/ErrorPage"))
const NotFound= React.lazy(() => import("./pages/NotFound"))
const MainLayout = React.lazy(() => import("./layouts/MainLayout"))
const AuthLayout = React.lazy(() => import("./layouts/AuthLayout"))
const Login = React.lazy(() => import("./pages/auth/Login"))
const Register = React.lazy(() => import("./pages/auth/Register"))
const Forgot = React.lazy(() => import("./pages/auth/Forgot"))





// 1. Data Mapping untuk Error (Sesuai Desain Space)
const errorData = {
  400: {
    code: "400",
    message: "BAD REQUEST",
    description: "The signal was lost in deep space. Your request is invalid.",
    imageUrl: "/img/ast3.jpg",
  },
  401: {
    code: "401",
    message: "UNAUTHORIZED",
    description: "Eitss! You don't have the key to enter this space station.",
    imageUrl: "/img/ast2.jpg",
  },
  403: {
    code: "403",
    message: "ACCESS FORBIDDEN",
    description: "Warning! This area is off-limits for unauthorized personnel.",
    imageUrl: "/img/ast1.jpg",
  },
  404: {
    code: "404",
    message: "PAGE NOT FOUND",
    description: "Your search has ventured beyond the known universe.",
    imageUrl: "/img/ast4.jpg",
  },
};

// 2. Wrapper untuk menangkap ID Error dari URL
const ErrorRouteWrapper = () => {
  const { errorCode } = useParams();
  const data = errorData[errorCode] || errorData[404]; // Default ke 404
  return <ErrorPage {...data} />;
};

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/customers" element={<Customers />} />

        {/* Route Dinamis untuk Error Page */}
        <Route path="/error/:errorCode" element={<ErrorRouteWrapper />} />

        {/* Handle jika user ngetik URL asal */}
        <Route path="*" element={<ErrorPage {...errorData[404]} />} />
      </Route>

        <Route element={<AuthLayout/>}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register/>} />
            <Route path="/forgot" element={<Forgot/>} />
        </Route>

    </Routes>
  );
}

export default App;
