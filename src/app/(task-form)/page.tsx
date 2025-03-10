'use client'
import Form from '@/components/elements/Form';
import TaskList from '@/components/elements/TaskList';
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { TaskReadContext } from '@/context/TaskReadContext';
import React, { useState, FormEvent, useContext } from 'react'

interface Task {
  id: number;
  text: string;
}

const Page = (): React.ReactElement => {
  const [tasks, setTasks] = useState<Task[]>([])
  
  const deleteTask = (id: number): void => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  const editTask = (id: number): void =>{
    
  }

  const tasksList =  useContext(TaskReadContext);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md space-y-4">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">
          To-Do List
        </h1>
        <Form/>
        <div className="mt-6 w-full max-w-md bg-white shadow-lg rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-3 text-gray-800">Your Tasks</h2>
          <TaskList tasks={tasksList?.tasks as Task[]} deleteTask={deleteTask}/>
        </div>
      </div>
    </div>
  )
}


const props = {
  tasks: {},
  deleteTask: {}
}
export default Page