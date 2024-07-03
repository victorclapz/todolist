import React, { useState } from "react"

export default function Form({createTodo}){

    const [value, setValue] = useState('')

    const handleSubmit = e =>{
        e.preventDefault()
        createTodo(value)
        setValue('')
    }

    return(
        <>
        <form className="font-primary flex items-center justify-center mb-8 " onSubmit={handleSubmit}>
            <input type="text" className="outline-none bg-transparent border border-gray-500 py-4 px-4 w-[300px]
             text-white rounded placeholder:text-white-500 transition ease-in-out delay-50 hover:-translate-y-0.5 hover:scale-105 hover:text-red-800 duration-200" placeholder="Qual a próxima tarefa?"
             onChange={(e)=> setValue(e.target.value)} value={value}/>
            <button className="bg-gray-700 border-none p-2 text-white cursor-pointer rounded ml-2 transition ease-in-out delay-50 hover:-translate-y-0.5 hover:scale-105 hover: duration-200">Add Tarefa</button>
        </form>
        </>
    )
}