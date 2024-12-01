import { useState } from 'react'
import './App.css'
import Login from './pages/Login'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import RolesPage from './pages/RolesPage';

function App() {

  return (
    // <Login />
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="roles" element={<RolesPage />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
