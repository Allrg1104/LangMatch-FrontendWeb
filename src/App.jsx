import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AdminHome from "./components/AdminHome";
import "./styles/App.css";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/admin" />} />
      <Route path="/admin/*" element={<AdminHome />} />
    </Routes>
  );
};

export default App;



