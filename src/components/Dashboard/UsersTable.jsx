import React, { useEffect, useState } from "react";
import axios from "axios";

const UsersTable = () => {
    const [usuarios, setUsuarios] = useState([]);
    const API_URL = "http://localhost:5000/api/chat/usuarios";

    useEffect(() => {
        const fetchUsuarios = async () => {
            try {
                const res = await axios.get(API_URL);
                setUsuarios(res.data.data || []);
            } catch (error) {
                console.error("❌ Error al cargar usuarios:", error);
            }
        };
        fetchUsuarios();
    }, []);

    return (
        <div className="card p-3 mb-4 shadow-sm">
            <h5 className="card-title">Usuarios registrados</h5>
            <div className="table-responsive">
                <table className="table table-hover align-middle">
                    <thead className="table-light">
                        <tr>
                            <th>#</th>
                            <th>Nombre</th>
                            <th>Correo</th>
                            <th>Idioma</th>
                            <th>Nivel</th>
                        </tr>
                    </thead>
                    <tbody>
                        {usuarios.length > 0 ? (
                            usuarios.map((u, i) => (
                                <tr key={u._id}>
                                    <td>{i + 1}</td>
                                    <td>{u.name}</td>
                                    <td>{u.email}</td>
                                    <td>{u.language || "N/A"}</td>
                                    <td>{u.level || "N/A"}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="5" className="text-center">
                                    No hay usuarios registrados
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UsersTable;
