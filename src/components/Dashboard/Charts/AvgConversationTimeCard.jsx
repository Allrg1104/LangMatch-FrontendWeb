import React from "react";

const AvgConversationTimeCard = () => {
    return (
        <div className="card text-center p-3 mb-4 shadow-sm">
            <h5 className="card-title">Tiempo promedio de conversación</h5>
            <h2 className="text-primary mt-2">-- min</h2>
            <p className="text-muted">Promedio calculado de todas las sesiones</p>
        </div>
    );
};

export default AvgConversationTimeCard;