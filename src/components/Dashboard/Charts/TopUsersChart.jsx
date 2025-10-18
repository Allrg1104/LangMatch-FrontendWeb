import React from "react";

const TopUsersChart = () => {
    return (
        <div className="card p-3 mb-4 shadow-sm">
            <h5 className="card-title text-center">Top 10 usuarios con más conversaciones</h5>
            <div className="text-center">
                {/* Aquí se renderizará el gráfico de barras horizontales */}
                <p className="text-muted">[Gráfico Top 10 usuarios]</p>
            </div>
        </div>
    );
};

export default TopUsersChart;
