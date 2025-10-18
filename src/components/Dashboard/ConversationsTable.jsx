import React from "react";

const ConversationsTable = () => {
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
                            <th>Tema</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Aquí se mapearán las conversaciones */}
                        <tr>
                            <td>1</td>
                            <td>Juan Pérez</td>
                            <td>Inglés</td>
                            <td>15 min</td>
                            <td>2025-10-10</td>
                            <td>Viajes</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Ana López</td>
                            <td>Francés</td>
                            <td>8 min</td>
                            <td>2025-10-12</td>
                            <td>Comida</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ConversationsTable;
