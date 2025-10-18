import React from "react";

const LanguagePieChart = () => {
    return (
        <div className="card p-3 mb-4 shadow-sm">
            <h5 className="card-title text-center">Uso de idiomas</h5>
            <div className="text-center">
                {/* Aquí se renderizará el gráfico de torta */}
                <p className="text-muted">[Gráfico circular de idiomas]</p>
            </div>
            <p className="text-center mt-2">
                Clic en un idioma para ver los niveles (A1, B1, C1)
            </p>
        </div>
    );
};

export default LanguagePieChart;
