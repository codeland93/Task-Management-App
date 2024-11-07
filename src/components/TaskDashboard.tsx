import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTaskContext } from '../context/TaskContext';

const TaskDashboard: React.FC = () => {
  const { tasks, deleteTask } = useTaskContext();

  useEffect(() => {
    console.log('Fetching tasks...');
   
  }, []);


  const handleDelete = (taskId: number) => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      deleteTask(taskId);
    }
  };

  return (
    <div className="container mt-4">
      <h1>Task Dashboard</h1>
      <Link to="/create" className="btn btn-primary mb-3">
        Create New Task
      </Link>
      <div className="list-group">
        {tasks.length === 0 ? (
          <p>No tasks available. Please create a task.</p>
        ) : (
          tasks.map((task) => (
            <div key={task.id} className="list-group-item d-flex justify-content-between">
              <Link to={`/task/${task.id}`}>
                <h5>{task.title}</h5>
              </Link>
              <button
                className="btn btn-danger"
                onClick={() => handleDelete(task.id)}
              >
                Delete
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default TaskDashboard;
