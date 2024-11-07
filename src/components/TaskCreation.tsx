import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { useTaskContext } from '../context/TaskContext';
import { Task } from '../types/Task';
import { Form, Button, Container } from 'react-bootstrap';

const TaskCreation: React.FC = () => {
  const { addTask } = useTaskContext();
  const navigate = useNavigate(); 


  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [dueDate, setDueDate] = useState<string>('');
  const [status, setStatus] = useState<'pending' | 'in-progress' | 'completed'>('pending'); 

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();


    const newTask: Task = {
      id: Date.now(), 
      title,
      description,
      dueDate,
      status,
    };


    addTask(newTask);

 
    navigate('/tasks'); 
  };

  return (
    <Container className="mt-5">
      <h2>Create New Task</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="title">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="description" className="mt-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="dueDate" className="mt-3">
          <Form.Label>Due Date</Form.Label>
          <Form.Control
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="status" className="mt-3">
          <Form.Label>Status</Form.Label>
          <Form.Select
            value={status}
            onChange={(e) => setStatus(e.target.value as 'pending' | 'in-progress' | 'completed')} 
          >
            <option value="pending">Pending</option>
            <option value="in-progress">In Progress</option>
            <option value="completed">Completed</option>
          </Form.Select>
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-4">
          Create Task
        </Button>
      </Form>
    </Container>
  );
};

export default TaskCreation;
