import React, {useState, useEffect, useRef} from 'react'
import { nanoid } from 'nanoid'

function TodoForm(props) {
  console.log(props.edit)

    //1. create state variables
    const [input, setInput] = useState("")
    
    const inputRef = useRef(null)

    //after form finishes loading, will focus automatically in the input
    useEffect(() => {
      inputRef.current.focus()
    })

    //2. change event constantly updating input state
    const handleChange = event => {
        setInput(event.target.value)
        console.log(input)
    }

    //3. submit event will store whatever is in state at that time to the list as a new ToDo.
    const handleSubmit = event => {
        event.preventDefault()

        let newToDo = {
          id: nanoid(),
          text: input
        }
        //AddTodo is a function held in the toDoList passed in to the Form as a prop. It takes a ToDo as argument and uses it in the declaration to modify the toDos array in the list.
        props.addToDo(newToDo)
        //clears the state input after the todo has been added to the toDos state.
        setInput("")
    }

  return (
    <form className='todo-form' onSubmit={handleSubmit}> 
        <input ref={inputRef} type='text' placeholder={props.edit? "Update your item" : "Add your new item"} value={input} name='text' className={`todo-input ${props.edit ? "edit" : ""}`} onChange={handleChange}/> {/*controlled input by input state variable*/}
        <button className={`todo-button ${props.edit ? "edit" : ""}`}>{props.edit? "Update" : "Add Todo"}</button>
    </form>
  )
}

export default TodoForm
