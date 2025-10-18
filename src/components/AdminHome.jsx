// src/components/AdminHome.jsx
import { Routes, Route, Navigate } from 'react-router-dom'
import Sidebar from './Sidebar'
import ProfileAvatar from './ProfileAvatar'

import Dashboard from './Dashboard'
import Users from './Users'
import Conversations from './Conversations'
import Settings from './Settings'

import '../styles/AdminHome.css'

function AdminHome() {
    return (
        <div className="admin-container">
            {/* Sidebar a la izquierda */}
            <Sidebar />

            {/* Contenido central */}
            <div className="admin-content">
                <header className="admin-header">
                    <h2>Panel Administrativo</h2>
                    <ProfileAvatar />
                </header>

                <main className="admin-main">
                    <Routes>
                        <Route path="/" element={<Navigate to="dashboard" />} />
                        <Route path="dashboard" element={<Dashboard />} />
                        <Route path="users" element={<Users />} />
                        <Route path="conversations" element={<Conversations />} />
                        <Route path="settings" element={<Settings />} />
                    </Routes>
                </main>
            </div>
        </div>
    )
}

export default AdminHome
