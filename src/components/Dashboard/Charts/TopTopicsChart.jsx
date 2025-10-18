import React from "react";

const TopTopicsChart = () => {
    return (
        <div className="card p-3 mb-4 shadow-sm">
            <h5 className="card-title text-center">Top 5 temas más tratados</h5>
            <div className="text-center">
                {/* Aquí se renderizará el gráfico de barras */}
                <p className="text-muted">[Gráfico Top 5 temas]</p>
            </div>
        </div>
    );
};

export default TopTopicsChart;
