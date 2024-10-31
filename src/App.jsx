// src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import './App.css';
import Layout from './pages/Layout';
import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';  // Ensure the capitalization is correct

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />} />  {/* Ensure Layout renders correctly */}
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Routes>
      </HashRouter>
  );
}

export default App;
