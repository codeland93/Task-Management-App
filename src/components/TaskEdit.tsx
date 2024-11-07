import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useTaskContext } from '../context/TaskContext';
import { Button, Form } from 'react-bootstrap';
import { Task } from '../types/Task';

const TaskEdit: React.FC = () => {
  const { tasks, updateTask } = useTaskContext() as {
    tasks: Task[];
    updateTask: (task: Task) => void;
  };
  
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const task = tasks.find((task) => task.id === parseInt(id || ''));

  // Initialize state with all fields, with 'status' restricted to union type values
  const [title, setTitle] = useState(task ? task.title : '');
  const [description, setDescription] = useState(task ? task.description : '');
  const [status, setStatus] = useState<"pending" | "in-progress" | "completed">(
    task ? task.status : "pending"
  ); 
  const [dueDate, setDueDate] = useState(task ? task.dueDate : '');

  if (!task) {
    return <div>Task not found</div>;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateTask({ ...task, title, description, status, dueDate });
    navigate('/tasks');
  };

  return (
    <div>
      <h2>Edit Task</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Group>

        {/* Use a dropdown for status selection */}
        <Form.Group controlId="formStatus">
          <Form.Label>Status</Form.Label>
          <Form.Control
            as="select"
            value={status}
            onChange={(e) => setStatus(e.target.value as "pending" | "in-progress" | "completed")}
          >
            <option value="pending">Pending</option>
            <option value="in-progress">In Progress</option>
            <option value="completed">Completed</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="formDueDate">
          <Form.Label>Due Date</Form.Label>
          <Form.Control
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Save Changes
        </Button>
      </Form>
    </div>
  );
};

export default TaskEdit;
