'use client'
import React, { useState } from 'react'

interface Task{
    id: Number,
    text: String,
}

interface TaskContextType {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  taskId: number | null;
  setTaskId: React.Dispatch<React.SetStateAction<number | null>>;
}

const TaskReadContext = React.createContext<TaskContextType | undefined>(undefined);

const TaskReadContextProvider = ({children}: React.PropsWithChildren) => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [taskId, setTaskId] = useState<number | null>(null);

  // alert(taskId);

  return<TaskReadContext.Provider value={{tasks, setTasks, taskId, setTaskId}}>
{children}
  </TaskReadContext.Provider>
}

export {TaskReadContextProvider, TaskReadContext}


