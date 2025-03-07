import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { TaskReadContext } from "@/context/TaskReadContext";
import React from "react";
import { useState } from "react";

export function EditDialog({id, handleClose}: {id: number, handleClose: ()=>void}) {
  const [value, setValue] = useState<String>('');
  const [open, setOpen] = useState(false);
  const taskContext = React.useContext(TaskReadContext);

  const handleUpdate = () => {
    taskContext?.setTasks(
      taskContext?.tasks.map((task) =>
        task.id === id ? { ...task, text: value } : task
      )
    );
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" 
        onClick={() => setValue(taskContext?.tasks.find((task) => task.id === id)?.text! )}
        className="bg-blue-500 hover:bg-blue-600 hover:text-white text-white font-semibold"
        >
          Edit
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Task</DialogTitle>
          <DialogDescription>
            Make changes to your task here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col items-center gap-y-2">
            <Input id="name" onChange={(e)=>setValue(e.target.value)} value={value as string} className="col-span-3" />
            <Button onClick={()=> handleUpdate()} type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold">Save</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
