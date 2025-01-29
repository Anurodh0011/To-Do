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
        <>
            <form className='flex flex-col items-center justify-center h-screen gap-4 max-w-md mx-auto'>
                <Label>To-Do List</Label>
                <Label>Enter your task:</Label>
                <Input />
                <Button>Add Task</Button>
            </form>
            <ul>
                {
                    <li>
                        tasks.map((task, index) => {
                        return(
                        {task}
                        )
                    })
                    </li>
                }
            </ul>
        </>
    )
}

export default page