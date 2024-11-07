import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTaskContext } from '../context/TaskContext';
import { Button } from 'react-bootstrap';
import { Task } from '../types/Task'; // Import Task type

const TaskDetails: React.FC = () => {
  const { id } = useParams<Record<string, string | undefined>>();  // Set type for useParams
  const navigate = useNavigate();
  const { tasks } = useTaskContext();

  // Convert `id` to a number and handle potential undefined
  const taskId = id ? parseInt(id, 10) : null;

  // Use the Task type to type the task variable correctly
  const task: Task | undefined = tasks.find((task) => task.id === taskId);

  if (!task) {
    return <div>Task not found</div>;
  }

  const handleEdit = () => {
    navigate(`/tasks/edit/${task.id}`);
  };

  return (
    <div>
      <h2>Task Details</h2>
      <p><strong>Title:</strong> {task.title}</p>
      <p><strong>Description:</strong> {task.description}</p>
      <p><strong>Status:</strong> {task.status}</p>
      <p><strong>Due Date:</strong> {task.dueDate}</p>
      <Button variant="primary" onClick={handleEdit}>
        Edit Task
      </Button>
    </div>
  );
};

export default TaskDetails;
