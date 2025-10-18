import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api/chat";

export const api = axios.create({
    baseURL: API_URL,
});

// Ejemplo de login
export const loginUser = async (correo, contrasena) => {
    const res = await api.post("/login", { correo, contrasena });
    return res.data;
};

// Ejemplo de obtener usuarios
export const getUsuarios = async () => {
    const res = await api.get("/usuarios");
    return res.data;
};
