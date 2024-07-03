import React, { useState } from "react"

export default function Edit({editTodo, task}){

    const [value, setValue] = useState('')

    const handleSubmit = e =>{
        e.preventDefault()
        editTodo(value, task.id)
        setValue('')
    }

    return(
        <>
        <form className="font-primary flex items-center justify-center mb-8 " onSubmit={handleSubmit}>
            <input type="text" className="ml-4 outline-none bg-transparent border border-gray-500 py-4 px-4 w-[300px]
             text-white rounded placeholder:text-white-500 " placeholder="Update"
             onChange={(e)=> setValue(e.target.value)} value={value}/>
            <button className="bg-gray-700 border-none p-2 text-white cursor-pointer rounded ml-2 ">Update tarefa</button>
        </form>
        </>
    )
}