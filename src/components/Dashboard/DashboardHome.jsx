import React, { useEffect, useState } from "react";
import axios from "axios";
import { Bar, Doughnut } from "react-chartjs-2";
import "chart.js/auto";
import "./Dashboard.css";

const DashboardHome = () => {
    const [stats, setStats] = useState({});
    const [usuariosActivos, setUsuariosActivos] = useState(0);
    const [topIdiomas, setTopIdiomas] = useState([]);
    const [practicasPorDia, setPracticasPorDia] = useState([]);
    const [promedioDuracion, setPromedioDuracion] = useState(0);
    const [ultimasPracticas, setUltimasPracticas] = useState([]);

    const API_URL = "http://localhost:5000/api/chat";

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [
                    resDashboard,
                    resActivos,
                    resIdiomas,
                    resDias,
                    resDuracion,
                ] = await Promise.all([
                    axios.get(`${API_URL}/dashboard`),
                    axios.get(`${API_URL}/dashboard/usuarios-activos`),
                    axios.get(`${API_URL}/dashboard/top-idiomas`),
                    axios.get(`${API_URL}/dashboard/practicas-por-dia`),
                    axios.get(`${API_URL}/dashboard/promedio-duracion`),
                ]);

                setStats(resDashboard.data.data);
                setUltimasPracticas(resDashboard.data.data.ultimasPracticas);
                setUsuariosActivos(resActivos.data.data.usuariosActivos);
                setTopIdiomas(resIdiomas.data.data);
                setPracticasPorDia(resDias.data.data);
                setPromedioDuracion(resDuracion.data.data.promedioMinutos);
            } catch (error) {
                console.error("❌ Error al cargar el dashboard:", error);
            }
        };

        fetchData();
    }, []);

    const chartPracticas = {
        labels: practicasPorDia.map((p) => p._id),
        datasets: [
            {
                label: "Prácticas por día",
                data: practicasPorDia.map((p) => p.total),
                backgroundColor: "rgba(54, 162, 235, 0.6)",
            },
        ],
    };

    const chartIdiomas = {
        labels: topIdiomas.map((i) => i._id),
        datasets: [
            {
                data: topIdiomas.map((i) => i.total),
                backgroundColor: ["#007bff", "#28a745", "#ffc107", "#dc3545", "#17a2b8"],
            },
        ],
    };

    return (
        <div className="container-fluid py-4 dashboard-container">
            <h3 className="mb-4 text-primary fw-bold">Panel General</h3>

            {/* 🔹 Métricas generales */}
            <div className="row mb-4">
                <div className="col-md-3">
                    <div className="card shadow-sm p-3 text-center bg-light border-0">
                        <h6>Total Usuarios</h6>
                        <h3>{stats.totalUsuarios || 0}</h3>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card shadow-sm p-3 text-center bg-light border-0">
                        <h6>Total Conversaciones</h6>
                        <h3>{stats.totalConversaciones || 0}</h3>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card shadow-sm p-3 text-center bg-light border-0">
                        <h6>Total Prácticas</h6>
                        <h3>{stats.totalPracticas || 0}</h3>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card shadow-sm p-3 text-center bg-light border-0">
                        <h6>Usuarios Activos (7 días)</h6>
                        <h3>{usuariosActivos || 0}</h3>
                    </div>
                </div>
            </div>

            {/* 🔹 Gráficos */}
            <div className="row">
                <div className="col-md-6 mb-4">
                    <div className="card shadow-sm border-0 p-3">
                        <h6 className="fw-bold text-secondary mb-3">Prácticas por día</h6>
                        <Bar data={chartPracticas} />
                    </div>
                </div>

                <div className="col-md-6 mb-4">
                    <div className="card shadow-sm border-0 p-3">
                        <h6 className="fw-bold text-secondary mb-3">Idiomas más practicados</h6>
                        <Doughnut data={chartIdiomas} />
                    </div>
                </div>
            </div>

            {/* 🔹 Últimas prácticas */}
            <div className="card shadow-sm border-0 p-3">
                <h6 className="fw-bold text-secondary mb-3">Últimas prácticas</h6>
                <div className="table-responsive">
                    <table className="table table-striped align-middle">
                        <thead>
                            <tr>
                                <th>Idioma</th>
                                <th>Nivel</th>
                                <th>Inicio</th>
                                <th>Fin</th>
                                <th>Usuario</th>
                            </tr>
                        </thead>
                        <tbody>
                            {ultimasPracticas?.length > 0 ? (
                                ultimasPracticas.map((p, i) => (
                                    <tr key={i}>
                                        <td>{p.idioma}</td>
                                        <td>{p.nivel}</td>
                                        <td>{new Date(p.startTime).toLocaleString()}</td>
                                        <td>{new Date(p.endTime).toLocaleString()}</td>
                                        <td>{p.userId?.slice(-4) || "N/A"}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="5" className="text-center">
                                        No hay prácticas registradas
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="text-end mt-3">
                <small className="text-muted">
                    ⏱ Promedio duración: <strong>{promedioDuracion} min</strong>
                </small>
            </div>
        </div>
    );
};

export default DashboardHome;
