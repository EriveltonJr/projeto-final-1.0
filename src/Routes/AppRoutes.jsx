import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/Home/Home";
import Login from "../pages/Home/Login";
import UserList from "../components/UserList";
import PrivateRoute from "../components/PrivateRoute"; 

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route 
        path="/users" 
        element={
          <PrivateRoute>
            <UserList />
          </PrivateRoute>
        } 
      />
    </Routes>
  );
};

export default AppRoutes;
