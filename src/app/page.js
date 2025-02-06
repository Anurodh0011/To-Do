'use client';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [tasks, setTask] = useState([]);
  const formHandle = (e) => {
    e.preventDefault(); //prevent from normal behaviour.
    console.log(e.target[0].value);
    setTask((prev) => [...prev, e.target[0].value]);
  }
  const handleDelete = (index) => {
    const filerTask = tasks.filter((task, i) => {
      index === i
    })
    setTask(filerTask)
  }

  return (
    <>
      <form onSubmit={formHandle}
        className="flex flex-col items-center justify-center h-screen max-w-md mx-auto gap-4">
        <Label>
          Enter your To-Do task.
        </Label>
        <Input name='todo' />
        <Button>Add</Button>

      </form>
      <ul>
        {
          tasks.map((task, index) => {
            return (
              <li key={index}>
                <span className="mr-4">{task}</span>

                <Button onClick={(e) => handleDelete(index)}>Delete</Button>
              </li>
            )
          })
        }

      </ul>

    </>
  );
}
