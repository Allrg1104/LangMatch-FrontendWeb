import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";

const ChangePassword = () => {
    const [formData, setFormData] = useState({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
    });

    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setMessage("");

        if (formData.newPassword !== formData.confirmPassword) {
            setError("Las contraseñas no coinciden.");
            return;
        }

        try {
            // TODO: integrar con backend (endpoint /api/users/change-password)
            console.log("Contraseña cambiada", formData);
            setMessage("Contraseña actualizada exitosamente.");
        } catch (err) {
            setError("Error al actualizar la contraseña.");
        }
    };

    return (
        <div className="p-4">
            <h3 className="mb-4">Cambiar Contraseña</h3>

            {message && <Alert variant="success">{message}</Alert>}
            {error && <Alert variant="danger">{error}</Alert>}

            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Contraseña Actual</Form.Label>
                    <Form.Control
                        type="password"
                        name="currentPassword"
                        value={formData.currentPassword}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Nueva Contraseña</Form.Label>
                    <Form.Control
                        type="password"
                        name="newPassword"
                        value={formData.newPassword}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Confirmar Nueva Contraseña</Form.Label>
                    <Form.Control
                        type="password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Button type="submit" variant="primary" className="mt-2">
                    Actualizar Contraseña
                </Button>
            </Form>
        </div>
    );
};

export default ChangePassword;
