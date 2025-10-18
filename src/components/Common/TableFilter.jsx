import React from "react";
import { Form, Row, Col } from "react-bootstrap";

const TableFilter = ({ filters, setFilters }) => {
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFilters((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <Form className="mb-3">
            <Row>
                <Col md={3}>
                    <Form.Group>
                        <Form.Label>Idioma</Form.Label>
                        <Form.Select name="language" value={filters.language} onChange={handleChange}>
                            <option value="">Todos</option>
                            <option value="es">Español</option>
                            <option value="en">Inglés</option>
                            <option value="fr">Francés</option>
                        </Form.Select>
                    </Form.Group>
                </Col>

                <Col md={3}>
                    <Form.Group>
                        <Form.Label>Nivel</Form.Label>
                        <Form.Select name="level" value={filters.level} onChange={handleChange}>
                            <option value="">Todos</option>
                            <option value="A1">A1</option>
                            <option value="B1">B1</option>
                            <option value="C1">C1</option>
                        </Form.Select>
                    </Form.Group>
                </Col>

                <Col md={4}>
                    <Form.Group>
                        <Form.Label>Fecha</Form.Label>
                        <Form.Control
                            type="date"
                            name="date"
                            value={filters.date}
                            onChange={handleChange}
                        />
                    </Form.Group>
                </Col>
            </Row>
        </Form>
    );
};

export default TableFilter;