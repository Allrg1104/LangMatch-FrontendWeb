import React from "react";

const UsersTable = () => {
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
                            <th>Conversaciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Aquí se mapearán los usuarios */}
                        <tr>
                            <td>1</td>
                            <td>Juan Pérez</td>
                            <td>juan@example.com</td>
                            <td>Inglés</td>
                            <td>B2</td>
                            <td>12</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Ana López</td>
                            <td>ana@example.com</td>
                            <td>Francés</td>
                            <td>A2</td>
                            <td>7</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UsersTable;
