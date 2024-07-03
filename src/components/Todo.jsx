import React from "react"  
import {AiFillEdit} from "react-icons/ai"
import {BsFillTrashFill } from "react-icons/bs"

export default function Todo({task, deleteTodo, editTodo}){
    return(
        <div className="flex place-content-around items-center bg-gradient-to-r from-violet-500 to-violet-800 text-white  py-3 px-4 rounded-md mb-1 cursor-pointer">
            <p className="font-primary pr-2 justify-center">{task.task}</p>
            <div className="flex justify-center items-center gap-x-4">
                <AiFillEdit className="text-xl transition ease-in-out delay-50 hover:-translate-y-0.5 hover:scale-105 hover:text-blue-200 duration-200 " onClick={() => editTodo(task.id)}/>
                <BsFillTrashFill className="text-xl transition ease-in-out delay-50 hover:-translate-y-0.5 hover:scale-105 hover:text-red-800 duration-200" onClick={()=> deleteTodo(task.id)}/>
            </div>
        </div>
    )
}

