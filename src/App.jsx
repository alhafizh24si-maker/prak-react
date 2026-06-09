import React, { Suspense } from "react"; 
import { Route, Routes, useParams } from "react-router-dom";
import "./assets/tailwind.css";
import Loading from "./components/Loading";

const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const Orders = React.lazy(() => import("./pages/Orders"));
const Customers = React.lazy(() => import("./pages/Customers"));
const Products = React.lazy(() => import("./pages/Products"));
const ProductsDetail = React.lazy(() => import("./pages/ProductsDetail"));

// 🟢 LAZY IMPORT UNTUK HALAMAN NOTES BARU
const NotesPage = React.lazy(() => import("./pages/Notes")); // Pastikan file diletakkan di folder pages/Notes.jsx

const ComponentsPage = React.lazy(() => import("./pages/Components"));
const FiturXyz = React.lazy(() => import("./pages/FiturXyz"));
const ErrorPage = React.lazy(() => import("./pages/ErrorPage"));
const MainLayout = React.lazy(() => import("./layouts/MainLayout"));
const AuthLayout = React.lazy(() => import("./layouts/AuthLayout"));
const Login = React.lazy(() => import("./pages/auth/Login"));
const Register = React.lazy(() => import("./pages/auth/Register"));
const Forgot = React.lazy(() => import("./pages/auth/Forgot"));

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

const ErrorRouteWrapper = () => {
  const { errorCode } = useParams();
  const data = errorData[errorCode] || errorData[404];
  return <ErrorPage {...data} />;
};

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        {/* Main Application Routes */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductsDetail />} /> 
          <Route path="/customers" element={<Customers />} />
          
          {/* ========================================================
              🟢 ROUTE BARU: MENANGKAP PATH /notes KE HALAMAN NOTES APP
             ======================================================== */}
          <Route path="/notes" element={<NotesPage />} />

          <Route path="/components" element={<ComponentsPage />} />
          <Route path="/fitur-xyz" element={<FiturXyz />} />
          <Route path="/error/:errorCode" element={<ErrorRouteWrapper />} />
          <Route path="*" element={<ErrorPage {...errorData[404]} />} />
        </Route>

        {/* Authentication Routes */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;