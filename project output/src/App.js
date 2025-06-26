import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import CourseList from './pages/CourseList';
import CourseDetail from './pages/CourseDetail';
import Dashboard from './pages/Dashboard';
import Progress from './pages/Progress';
import Certificate from './pages/Certificate';
import Checkout from './pages/Checkout';

function App() {
  return (
    <Router>
      <Navbar />
      <main className="container mt-5 pt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/courses" element={<CourseList />} />
          <Route path="/courses/:id" element={<CourseDetail />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/progress" element={<Progress />} />
          <Route path="/certificates" element={<Certificate />} />
          <Route path="/checkout/:id" element={<Checkout />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
