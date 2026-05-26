import React from 'react'
import { useState, useEffect } from 'react'
import { TiEdit } from "react-icons/ti";
import { MdDelete } from "react-icons/md";
import { v4 as uuidv4 } from "uuid";

const TodoContent = () => {
    const [todo, setTodo] = useState("");
    const [todos, setTodos] = useState([]);
    const [showFinished, setshowFinished] = useState(true)

    useEffect(() => {
        try {

            let todoString = localStorage.getItem("todos");

            if (todoString) {

                let todos = JSON.parse(todoString)

                if (Array.isArray(todos)) {
                    setTodos(todos)
                } else {
                    localStorage.removeItem("todos")
                }

            }

        } catch (error) {

            console.log("Invalid localStorage data")

            localStorage.removeItem("todos")
        }
    }, [])


    const handleChange = (e) => {
        setTodo(e.target.value)
    }
    const saveToLS = (todos) => {
        localStorage.setItem("todos", JSON.stringify(todos))
    }
    const handleAdd = () => {
        const newTodos = [
            ...todos,
            { id: uuidv4(), todo, isCompleted: false }
        ]

        setTodos(newTodos)

        saveToLS(newTodos)

        setTodo("")
    }

    const handleCheckbox = (e) => {
        let id = e.target.name
        let index = todos.findIndex(item => {
            return item.id === id;
        })
        let newTodos = [...todos];
        newTodos[index].isCompleted = !newTodos[index].isCompleted;
        setTodos(newTodos)

        saveToLS(newTodos)

    }

    const toggleFinished = (e) => {
        setshowFinished(!showFinished)
    }

    const handleEdit = (e, id) => {
        let t = todos.filter(i => i.id === id)
        setTodo(t[0].todo)
        let newTodos = todos.filter(item => {
            return item.id !== id
        });
        setTodos(newTodos)
        saveToLS(newTodos)
    }

    const handleDelete = (id) => {
        let newTodos = todos.filter(item => {
            return item.id !== id
        });
        setTodos(newTodos)
        saveToLS(newTodos)
    }

    return (
        <div className='flex flex-col items-center p-3 bg-violet-100 rounded-lg mx-3 lg:w-1/3 lg:m-auto my-3 lg:my-3 h-[calc(92vh-24px)]'>
            <div className='flex flex-col w-full'>
                <h1 className='font-sans font-bold text-2xl text-center'>
                    iTask - Manage Your Todos at one place
                </h1>
                <div>
                    <h3 className='font-sans font-bold text-xl m-3'>Add a Todo</h3>
                    <div className='flex gap-2'>
                        <input type="text" value={todo} onChange={handleChange} className='w-full border hover:border-black rounded-full p-1 px-3' />
                        <button disabled={todo.length < 1} onClick={handleAdd} className='bg-violet-600 text-white rounded-2xl p-1 px-4 font-sans text-sm font-medium'>Save</button>
                    </div>
                    <div>
                        <div className='flex gap-2 text-sm m-3 border-b border-black pb-4'>
                            <input type="checkbox" onChange={toggleFinished} name="showFinished" id="showFinished" checked={showFinished} />
                            <h3>Show Finished</h3>
                        </div>
                        <h3 className='font-sans font-bold text-xl m-3'>Your Todos</h3>
                        {todos.length === 0 && <div className='m-5'>No Todos</div>}

                        {todos.map(item => {
                            return (showFinished || !item.isCompleted) && <div key={item.id} className='todos flex justify-around mb-2'>
                                <div className='flex gap-3'>
                                    <input type="checkbox" onChange={handleCheckbox} name={item.id} checked={item.isCompleted} id="check" />
                                    <div className='w-[330px] wrap-break-word bg-[#d5d8ea] p-3 rounded-xl'>
                                        <h3 className={item.isCompleted ? "line-through" : ""} >{item.todo} </h3>
                                    </div>
                                </div>
                                <div className='flex gap-3 flex-wrap items-center'>
                                    <button onClick={(e) => handleEdit(e, item.id)} className='bg-violet-900 text-white rounded-md p-2'>
                                        <TiEdit />
                                    </button>
                                    <button onClick={() => handleDelete(item.id)} className='bg-violet-900 text-white rounded-md p-2'>
                                        <MdDelete />
                                    </button>
                                </div>
                            </div>
                        })}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default TodoContent
