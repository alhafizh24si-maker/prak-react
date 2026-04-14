import React from 'react';
import ReactDOM from 'react-dom/client';
import Sidebar from './layouts/Sidebar';
import Header from './layouts/Header';
import Dashboard from './pages/Dashboard';
import './assets/tailwind.css';

export default function App() {
    return (
        <div id="app-container" className="bg-latar min-h-screen flex">
            {/* Sidebar tetap di kiri */}
            <Sidebar />

            {/* Wrapper konten utama di kanan */}
            <div id="main-content" className="flex-1 flex flex-col">
                <Header />
                <main className="flex-1 overflow-y-auto">
                    <Dashboard />
                </main>
            </div>
        </div>
    );
}

// Render ke DOM
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);