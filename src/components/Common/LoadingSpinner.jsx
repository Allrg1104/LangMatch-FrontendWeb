import React from "react";
import { Spinner } from "react-bootstrap";

const LoadingSpinner = ({ text = "Cargando..." }) => {
    return (
        <div className="d-flex flex-column align-items-center justify-content-center my-5">
            <Spinner animation="border" variant="primary" />
            <p className="mt-3">{text}</p>
        </div>
    );
};

export default LoadingSpinner;