import React from "react";
import { Button } from "react-bootstrap";
import { FaFileExcel } from "react-icons/fa";

const DownloadButton = ({ onClick, label = "Descargar Excel" }) => {
  return (
    <Button variant="success" onClick={onClick} className="d-flex align-items-center gap-2">
      <FaFileExcel /> {label}
    </Button>
  );
};

export default DownloadButton;