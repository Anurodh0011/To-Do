'use client'
import Form from '@/components/elements/Form';
import TaskList from '@/components/elements/TaskList';
import {  TaskReadContext } from '@/context/TaskReadContext';
import React, { useContext, useEffect } from 'react'

interface Task {
  id: number;
  text: string;
}

const Page = () => {
  const taskContext = useContext(TaskReadContext);
  
  const [isMounted, setIsMounted] = React.useState<boolean | null >(false);
  const deleteTask = (id: number): void => {
    if (taskContext) {
      taskContext.setTasks(taskContext.tasks.filter(task => task.id !== id));
    }
  }

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if(!isMounted){
    return null;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md space-y-4">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">
          To-Do List
        </h1>
        <Form />
        <div className="mt-6 w-full max-w-md bg-white shadow-lg rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-3 text-gray-800">Your Tasks</h2>
          {taskContext && <TaskList tasks={taskContext.tasks} deleteTask={deleteTask} />}
        </div>
      </div>
    </div>
  )
}

// Wrap the Page component with the TaskProvider
const PageWithProvider = (): React.ReactElement => {
  return (
      <Page />
  )
}

export default PageWithProvider;