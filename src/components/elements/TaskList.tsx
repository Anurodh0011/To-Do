import React, { useContext, useState, useEffect } from 'react';
import { Button } from '../ui/button';
import { EditDialog } from './EditDialog';
import { TaskReadContext } from '@/context/TaskReadContext';

interface TaskProps {
  id: number;
  text: string;
}



interface TaskListProps {
  tasks: TaskProps[];
  deleteTask: (id: number) => void;
}



const TaskList = ({ tasks, deleteTask }: TaskListProps) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [isClient, setIsClient] = useState(false); // New state
  const taskContext = useContext(TaskReadContext);

  useEffect(() => {
    setIsClient(true); // Only set after client mounts
  }, []);

  const deleteTaskForm = (id: number) => {
    if (taskContext) {
      taskContext?.setTasks(taskContext.tasks.filter((task) => id !== task.id));
    }
  };

  const handleClose = () => {
    setModalOpen(!modalOpen);
  };

  if (!isClient) return null; // Avoid mismatched HTML during hydration

  return (
    <ul className="space-y-3">
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <li
            key={task.id}
            className="flex justify-between items-center bg-gray-100 p-3 rounded-md shadow-sm"
          >
            <span className="text-gray-800">{task?.text}</span>
            <div className="space-x-1">
              <EditDialog id={task.id} handleClose={handleClose} />
              <Button
                onClick={() => deleteTaskForm(task.id)}
                className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md"
              >
                Delete
              </Button>
            </div>
          </li>
        ))
      ) : (
        <li>No tasks available</li>
      )}
    </ul>
  );
};

export default TaskList;
