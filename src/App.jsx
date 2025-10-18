// src/App.jsx
import { Routes, Route, Navigate } from 'react-router-dom'
import AdminHome from './components/AdminHome'
import ChangePassword from './components/ChangePassword' // si existe
import Login from './components/Login' // si existe
import './styles/App.css'

function App() {
  return (
    <Routes>
      {/* Ruta de inicio → login */}
      <Route path="/" element={<Login />} />

      {/* Ruta principal admin */}
      <Route path="/admin/*" element={<AdminHome />} />

      {/* Ruta para cambiar contraseña */}
      <Route path="/change-password" element={<ChangePassword />} />

      {/* Redirección si no coincide ninguna */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}

export default App

