import React from "react";
import Sidebar from "./Sidebar";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
    const navigate = useNavigate();
    const admin = JSON.parse(localStorage.getItem("admin")) || { name: "Administrador" };

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("admin");
        navigate("/login");
    };

    return (
        <div className="navbar-layout">
            {/* Sidebar lateral */}
            <Sidebar />

            {/* Barra superior */}
            <div className="topbar">
                <div className="topbar-left">
                    <h5>👋 Bienvenido, {admin.name}</h5>
                </div>
                <div className="topbar-right">
                    <div className="avatar-circle">
                        {admin.name.charAt(0).toUpperCase()}
                    </div>
                    <button onClick={handleLogout} className="btn btn-outline-light btn-sm ms-3">
                        Cerrar sesión
                    </button>
                </div>
            </div>
        </div>
    );
}
