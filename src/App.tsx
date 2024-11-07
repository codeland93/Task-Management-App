import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TaskDashboard from './components/TaskDashboard';
import TaskDetails from './components/TaskDetails';
import TaskCreation from './components/TaskCreation';
import TaskEdit from './components/TaskEdit';
import TaskList from './components/TaskList'; 
import AuthPage from './components/AuthPage';
import { Auth0Provider } from '@auth0/auth0-react';
import { TaskProvider } from './context/TaskContext';
import 'bootstrap/dist/css/bootstrap.min.css';

const App: React.FC = () => {
  return (
    <Auth0Provider
      domain="dev-jkea1trp7tro4adh.us.auth0.com" 
      clientId="UEHtKXTHTT9zSxt5dUn6LKqHHFbXz2uN"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <TaskProvider>
        <Router>
          <Routes>
            <Route path="/" element={<TaskDashboard />} />
            <Route path="/tasks" element={<TaskList />} /> {}
            <Route path="/task/:id" element={<TaskDetails />} />
            <Route path="/create" element={<TaskCreation />} />
            <Route path="/edit/:id" element={<TaskEdit />} />
            <Route path="/auth" element={<AuthPage />} />
          </Routes>
        </Router>
      </TaskProvider>
    </Auth0Provider>
  );
};

export default App;
