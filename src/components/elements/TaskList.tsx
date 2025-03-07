import React  from 'react'
import { Button } from '../ui/button';
import { EditDialog } from './EditDialog';
import { TaskReadContext } from '@/context/TaskReadContext';



interface taskProps{
    id: Number;
    text: string;

}

const TaskList =  ({tasks  ,deleteTask }: {tasks: taskProps[], deleteTask: any} )=> {
  const [modalOpen, setModalOpen] = React.useState(false);
    console.log(tasks);
    const taskContext = React.useContext(TaskReadContext);

    const deleteTaskForm = (id: number) => {
      taskContext?.setTasks(tasks.filter((task) => id !== task.id));
    }

    const handleClose = () => {
      setModalOpen(!modalOpen);
    };


  return (
    <ul className="space-y-3">
    {tasks.length > 0 ? (
      tasks.map((task) => (
        <li
          key={task.id as number}
          className="flex justify-between items-center bg-gray-100 p-3 rounded-md shadow-sm"
        >
          <span className="text-gray-800">{task.text}</span>
          <div className='space-x-1'>
            {
          <EditDialog id={task.id as number} handleClose={handleClose as ()=>void}/>
            }
          <Button
            onClick={() => deleteTaskForm(task.id as number)}
            className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md"
          >
            Delete
          </Button>
          </div>
        </li>
      ))
    ) : (
      <p className="text-gray-500 text-center">No tasks added yet.</p>
    )}
  </ul>
  )
}

export default TaskList