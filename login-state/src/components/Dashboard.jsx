import React from 'react';
import { useAuth } from '../context/AuthContext';

const Dashboard = () => {
  const { isAuthenticated, login, logout } = useAuth();

  return (
    <div>
      {isAuthenticated ? (
        <>
          <h2>Welcome!</h2>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <>
          <h2>Please login</h2>
          <button onClick={login}>Login</button>
        </>
      )}
    </div>
  );
};

export default Dashboard;
