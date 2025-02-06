'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React, { useState } from 'react'

const page = () => {
    const [tasks, setTask] = useState([])
    const handleForm = (e) => {
        e.preventDefault()
        console.log(e.target[0].value)
        setTask((prev) => [...prev, e.target[0].value])
    }


    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
            <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md space-y-4">
                <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">
                    To-Do List
                </h1>
                <form onSubmit={handleForm}
                    className="flex flex-col gap-4"
                >
                    <Input name={'tsk'}
                        className="border border-gray-300 rounded-md p-2"
                        placeholder="Enter your task here..."
                    />
                    <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold">Add Task</Button>
                </form>
                <div className="mt-6 w-full max-w-md bg-white shadow-lg rounded-lg p-4">
                    <h2 className="text-xl font-semibold mb-3 text-gray-800">Your Task</h2>
                    <ul className="space-y-3">
                        {tasks.length > 0 ? (
                            tasks.map((task, index) => (
                                <li
                                    key={index}
                                    className="flex justify-between items-center bg-gray-100 p-3 rounded-md shadow-sm"
                                >
                                    <span className="text-gray-800">{task}</span>
                                    <Button
                                        onClick={() => setTasks(tasks.filter((_, i) => i !== index))}
                                        className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md"
                                    >
                                        Delete
                                    </Button>
                                </li>
                            ))
                        ) : (
                            <p className="text-gray-500 text-center">No tasks added yet.</p>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default page