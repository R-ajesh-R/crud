import { useState } from 'react'
import './App.css'
import Login from './pages/Login'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    // <Login />
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        {/* <Route path="/dashboard" element={<DashboardPage />} /> */}
      </Routes>
    </Router>
  )
}

export default App
