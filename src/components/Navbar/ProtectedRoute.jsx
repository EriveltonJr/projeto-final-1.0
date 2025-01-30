import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const token = localStorage.getItem("authToken");

  if (!token) {
    return <Navigate to="/login" />; // Redireciona para a página de login se não houver token
  }

  return <Outlet />; // Renderiza a rota protegida
};

export default ProtectedRoute;