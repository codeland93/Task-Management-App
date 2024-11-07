import React from 'react';
import { useTaskContext } from '../context/TaskContext';
import { Link } from 'react-router-dom';
import { ListGroup, Container, Button } from 'react-bootstrap';

const TaskList: React.FC = () => {
  const { tasks, deleteTask } = useTaskContext(); 

  const handleDelete = (taskId: number) => {
    deleteTask(taskId);  
  };

  return (
    <Container className="mt-5">
      <h2>Task List</h2>
      {tasks.length === 0 ? (
        <p>No tasks available. Please create a new task.</p>
      ) : (
        <ListGroup>
          {tasks.map((task) => (
            <ListGroup.Item
              key={task.id}
              className="d-flex justify-content-between align-items-center"
            >
              <div>
                <h5>{task.title}</h5>
                <p>{task.description}</p>
                <small>Due Date: {task.dueDate}</small>
              </div>
              <div>
                <Link to={`/task/${task.id}`}>
                  <Button variant="primary" className="me-2">
                    View Details
                  </Button>
                </Link>
                <Link to={`/edit/${task.id}`}>
                  <Button variant="secondary" className="me-2">
                    Edit Task
                  </Button>
                </Link>
                <Button
                  variant="danger"
                  onClick={() => handleDelete(task.id)}
                >
                  Delete Task
                </Button>
              </div>
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}
    </Container>
  );
};

export default TaskList;
