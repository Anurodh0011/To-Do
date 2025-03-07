'use client'
import { FormEvent, useContext, useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { TaskReadContext } from "@/context/TaskReadContext";

interface Task {
  id: number;
  text: string;
}
interface TaskContextType {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

export default function Form() {
  const taskContext = useContext(TaskReadContext);

  if (!taskContext) {
      return null; // or some fallback UI
  }

  console.log(taskContext.setTasks);

  
  const handleForm = (e: FormEvent<HTMLFormElement>): void => {
      e.preventDefault()
      const form = e.target as HTMLFormElement
      const input = form[0] as HTMLInputElement
      const taskText = input.value.trim()
        
      if (taskText) {
          taskContext.setTasks( [...taskContext.tasks, { 
              id: Date.now(), 
              text: taskText 
      }])
          input.value = ''
      }
  }

  return (
      <form onSubmit={handleForm}
      className="flex flex-col gap-4"
      >
          <Input name={'tsk'}
              className="border border-gray-300 rounded-md p-2"
              placeholder="Enter your task here..."
          />
          <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold">Add Task</Button>
      </form>
  )
}