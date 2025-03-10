'use client'
import React, { createContext, ReactNode } from 'react';
import useLocalStorage from '@/lib/useLocalStorage';

interface Task {
  id: number;
  text: string;
}

interface TaskContextType {
  tasks: Task[];
  setTasks: (value: Task[])=>void
}

// Create the context with a default value
export const TaskReadContext = createContext<TaskContextType | null>(null);

interface TaskProviderProps {
  children: ReactNode;
}

export const TaskProvider: React.FC<TaskProviderProps> = ({ children }) => {
  // Replace useState with useLocalStorage
  const [tasks, setTasks] = useLocalStorage<Task[]>('tasks', []);

  return (
    <TaskReadContext.Provider value={{ tasks, setTasks }}>
      {children}
    </TaskReadContext.Provider>
  );
};