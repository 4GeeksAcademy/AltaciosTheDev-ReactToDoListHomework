import React, {useState} from 'react'
import TodoForm from './TodoForm'
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import { RiCheckboxCircleLine } from "react-icons/ri";
import { RiCheckboxCircleFill } from "react-icons/ri";

//1)destructure received props (toDos)
function Todo({toDos, completeToDo, removeToDo, updateToDo}) {
    //edit state is default to id null and value empty 
    const [edit, setEdit] = useState({
        id: null,
        value: ""
    })

    //5e receive newTodoObj and pass it ot updateToDo and id
    const submitUpdate = newToDoObj => {
        //6e if id matches, then prevTodo ges overwritten with newToDo
        updateToDo(edit.id, newToDoObj)
        setEdit({
            id: null,
            value: ""
        })
    }

    //possible upgrade, create singleToDo component. 

    //2. create todoElement mapping over the array past over as a prop
    const toDosElements = toDos.map((toDo, index) => {
        return (
            <div className={toDo.isComplete ? "todo-row complete" : 'todo-row'} key={index}>
                <div key={toDo.id} onClick={() => completeToDo(toDo.id)}>
                    {toDo.text}
                </div>
                <div className="icons">
                    <RiCloseCircleLine onClick={() => removeToDo(toDo.id)} className='delete-icon'/>
                    {/* 1e) onclick setsEdit to an object which id= todo id, and value = orignal todotext */}
                    <TiEdit onClick={() => setEdit({id: toDo.id, value:toDo.text})} className='edit-icon'/>
                    {!toDo.isComplete && <RiCheckboxCircleLine className='uncheck-icon' onClick={() => completeToDo(toDo.id)}/>}
                    {toDo.isComplete && <RiCheckboxCircleFill className='check-icon' onClick={() => completeToDo(toDo.id)}/>}
                </div>
            </div>
        )
    })

    //2e) IF edit, which becomes true after edit icon is clicked snd setEdit sets it to true, form is returned
    if(edit.id){
        //3e) render a TodoForm but with edit as prop and new fuction as addToDo prop
        return <TodoForm edit={edit} addToDo={submitUpdate}/>
    }

    //{toDosElements} would be if i was inside JSX mode
    //3. render the toDos elements
  return toDosElements
}

export default Todo
