import React from "react";
import "./Sidebar.css";
import { FaHome, FaUsers, FaChartPie, FaCog } from "react-icons/fa";

const Sidebar = () => {
    return (
        <div className="sidebar d-flex flex-column p-3 shadow">
            <h4 className="text-center mb-4">LinguaMetrics</h4>

            <ul className="nav flex-column">
                <li className="nav-item mb-2">
                    <a href="#" className="nav-link active">
                        <FaHome className="me-2" />
                        Inicio
                    </a>
                </li>
                <li className="nav-item mb-2">
                    <a href="#" className="nav-link">
                        <FaUsers className="me-2" />
                        Usuarios
                    </a>
                </li>
                <li className="nav-item mb-2">
                    <a href="#" className="nav-link">
                        <FaChartPie className="me-2" />
                        Métricas
                    </a>
                </li>
                <li className="nav-item mb-2">
                    <a href="#" className="nav-link">
                        <FaCog className="me-2" />
                        Configuración
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
