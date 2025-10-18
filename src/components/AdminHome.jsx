import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Sidebar from "./Navbar/Sidebar.jsx";
import DashboardHome from "./Dashboard/DashboardHome.jsx";
import UsersTable from "./Dashboard/UsersTable.jsx";
import MetricsDashboard from "./Dashboard/MetricsDashboard.jsx";
import ChangePassword from "./Config/ChangePassword";
import "./Navbar/Navbar.css"; // ✅ Estilos del sidebar + topbar

const AdminHome = () => {
    const navigate = useNavigate();

    // 🔹 Simulación de datos del admin (puede venir del backend o localStorage)
    const admin = JSON.parse(localStorage.getItem("admin")) || {
        name: "Administrador",
        email: "admin@linguametrics.com",
    };

    // 🔹 Cerrar sesión
    const handleLogout = () => {
        localStorage.removeItem("admin");
        navigate("/"); // redirige al login o inicio
    };

    return (
        <div className="d-flex navbar-layout">
            {/* Sidebar fijo */}
            <Sidebar />

            {/* Contenedor principal */}
            <div
                className="flex-grow-1 main-content"
                style={{
                    background: "#f5f6fa",
                    minHeight: "100vh",
                }}
            >
                {/* 🔹 Topbar fija */}
                <div className="topbar">
                    <div className="topbar-left">
                        <h5>👋 Bienvenido, {admin.name}</h5>
                    </div>

                    <div className="topbar-right">
                        <div className="avatar-circle">
                            {admin.name.charAt(0).toUpperCase()}
                        </div>
                        <button
                            onClick={handleLogout}
                            className="btn btn-outline-light btn-sm ms-3"
                        >
                            Cerrar sesión
                        </button>
                    </div>
                </div>

                {/* 🔹 Contenido dinámico con margen superior */}
                <div className="admin-content p-4" style={{ marginTop: "80px" }}>
                    <Routes>
                        <Route path="/" element={<DashboardHome />} />
                        <Route path="users" element={<UsersTable />} />
                        <Route path="metrics" element={<MetricsDashboard />} />
                        <Route path="settings" element={<ChangePassword />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
};

export default AdminHome;
