import React, { useEffect, useState } from "react";
import axios from "axios";

const ConversationsTable = () => {
    const [conversaciones, setConversaciones] = useState([]);
    const API_URL = "http://localhost:5000/api/chat/dashboard";

    useEffect(() => {
        const fetchConversaciones = async () => {
            try {
                const res = await axios.get(API_URL);
                setConversaciones(res.data.data.ultimasPracticas || []);
            } catch (error) {
                console.error("❌ Error al obtener conversaciones:", error);
            }
        };
        fetchConversaciones();
    }, []);

    return (
        <div className="card p-3 mb-4 shadow-sm">
            <h5 className="card-title">Últimas conversaciones</h5>
            <div className="table-responsive">
                <table className="table table-striped align-middle">
                    <thead className="table-light">
                        <tr>
                            <th>#</th>
                            <th>Usuario</th>
                            <th>Idioma</th>
                            <th>Duración</th>
                            <th>Fecha</th>
                        </tr>
                    </thead>
                    <tbody>
                        {conversaciones.length > 0 ? (
                            conversaciones.map((c, i) => (
                                <tr key={i}>
                                    <td>{i + 1}</td>
                                    <td>{c.userId?.slice(-4) || "N/A"}</td>
                                    <td>{c.idioma}</td>
                                    <td>{c.duracionMinutos} min</td>
                                    <td>{new Date(c.endTime).toLocaleDateString()}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="5" className="text-center">
                                    No hay conversaciones registradas
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ConversationsTable;
