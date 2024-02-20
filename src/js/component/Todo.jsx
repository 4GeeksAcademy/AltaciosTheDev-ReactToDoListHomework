import React, {useState} from 'react'
import TodoForm from './TodoForm'
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import { RiCheckboxCircleLine } from "react-icons/ri";
import { RiCheckboxCircleFill } from "react-icons/ri";

function Todo({toDos, completeToDo, removeToDo, updateToDo}) {
    const [edit, setEdit] = useState({
        id: null,
        value: ""
    })

    const submitUpdate = value => {
        updateToDo(edit.id, value)
        setEdit({
            id: null,
            value: ""
        })
    }

    if(edit.id){
        return <TodoForm edit={edit} addToDo={submitUpdate}/>
    }

  return (
    toDos.map((todo, index) => {
        return (
            <div className={todo.isComplete ? "todo-row complete" : 'todo-row'} key={index}>
                <div key={todo.id} onClick={() => completeToDo(todo.id)}>
                    {todo.text}
                </div>
                <div className="icons">
                    <RiCloseCircleLine onClick={() => removeToDo(todo.id)} className='delete-icon'/>
                    <TiEdit onClick={() => setEdit({id: todo.id, value:todo.text})} className='edit-icon'/>
                    {!todo.isComplete && <RiCheckboxCircleLine className='uncheck-icon' onClick={() => completeToDo(todo.id)}/>}
                    {todo.isComplete && <RiCheckboxCircleFill className='check-icon' onClick={() => completeToDo(todo.id)}/>}
                </div>
            </div>
        )
    })
  )
}

export default Todo
