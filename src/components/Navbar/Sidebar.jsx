import React from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";
import { FaHome, FaUsers, FaChartPie, FaCog } from "react-icons/fa";

const Sidebar = () => {
    return (
        <div className="sidebar d-flex flex-column p-3 shadow">
            <h4 className="text-center mb-4">LinguaMetrics</h4>

            <ul className="nav flex-column">
                <li className="nav-item mb-2">
                    <NavLink
                        to="/admin"
                        className={({ isActive }) =>
                            "nav-link" + (isActive ? " active" : "")
                        }
                    >
                        <FaHome className="me-2" />
                        Inicio
                    </NavLink>
                </li>

                <li className="nav-item mb-2">
                    <NavLink
                        to="/admin/users"
                        className={({ isActive }) =>
                            "nav-link" + (isActive ? " active" : "")
                        }
                    >
                        <FaUsers className="me-2" />
                        Usuarios
                    </NavLink>
                </li>

                <li className="nav-item mb-2">
                    <NavLink
                        to="/admin/metrics"
                        className={({ isActive }) =>
                            "nav-link" + (isActive ? " active" : "")
                        }
                    >
                        <FaChartPie className="me-2" />
                        Métricas
                    </NavLink>
                </li>

                <li className="nav-item mb-2">
                    <NavLink
                        to="/admin/settings"
                        className={({ isActive }) =>
                            "nav-link" + (isActive ? " active" : "")
                        }
                    >
                        <FaCog className="me-2" />
                        Configuración
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
