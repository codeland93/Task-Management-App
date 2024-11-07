import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const AuthPage: React.FC = () => {
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();

  return (
    <div className="container mt-4">
      {!isAuthenticated ? (
        <button className="btn btn-primary" onClick={() => loginWithRedirect()}>Login</button>
      ) : (
        <div>
          <h3>Welcome, {user?.name}</h3>
          <button className="btn btn-danger" onClick={() => logout()}>
  Logout
</button>

        </div>
      )}
    </div>
  );
};

export default AuthPage;
