import React from 'react';

function Login() {
  return (
    <div className="col-md-6 mx-auto mt-5">
      <h2>Login</h2>
      <form>
        <div className="mb-3">
          <label>Email or Username</label>
          <input type="text" className="form-control" placeholder="Enter your email or username" />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input type="password" className="form-control" placeholder="Enter password" />
        </div>
        <button type="submit" className="btn btn-primary">Log In</button>
      </form>
    </div>
  );
}

export default Login;
