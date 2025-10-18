import api from "./api.js";

// 🔹 Obtener resumen de métricas generales
export const getDashboardStats = async () => {
    const res = await api.get("/chat/metrics");
    return res.data;
};

// 🔹 Obtener listado de usuarios
export const getUsuarios = async () => {
    const res = await api.get("/usuarios");
    return res.data;
};

// 🔹 Obtener últimas conversaciones
export const getUltimasConversaciones = async () => {
    const res = await api.get("/chat/conversaciones");
    return res.data;
};
