import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header className="bg-primary text-white py-3 fixed-top">
      <div className="container d-flex justify-content-between">
        <h4 className="m-0">Learning Hub</h4>
        <nav>
          <Link to="/" className="text-white me-3">Home</Link>
          <Link to="/courses" className="text-white me-3">Courses</Link>
          <Link to="/progress" className="text-white me-3">Progress</Link>
          <Link to="/certificates" className="text-white me-3">Certificates</Link>
          <Link to="/checkout/1" className="text-white me-3">Checkout</Link>
          <Link to="/login" className="text-white me-3">Login</Link>
          <Link to="/register" className="text-white">Register</Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
