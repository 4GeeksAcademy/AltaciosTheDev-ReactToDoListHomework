import React, {useState, useEffect, useRef} from 'react'
import { nanoid } from 'nanoid'

function TodoForm(props) {
    //1. create state variable to control the input 
    const [input, setInput] = useState("")
    const inputRef = useRef(null)

    //2. when change event triggered, setInput to input value.
    const handleChange = event => {
      setInput(event.target.value)
    }
  
    //3. Code to run after render
    useEffect(() => {
      inputRef.current.focus()
      console.log(`state input: ${input}`)
    })


    //4. submit event will store whatever is in state at that time to the list as a new ToDo.
    const handleSubmit = event => {
        //4.1 prevent auto page reload on submit
        event.preventDefault()
        //4.2 create newTodo object instance
        let newTodo = {
          id: nanoid(),
          text: input,
          isComplete: false
        }
        //4.3 AddToDo is a function held in the toDoList passed in to the Form as a prop. It takes a ToDo as argument and uses it in the declaration to modify the toDos array in the list.
        //4e)submitupdate=addTodo y ejecuta la funcion pasando un newToDo como argumento
        props.submitToDo(newTodo)
        //4.4 Clear the state input after the todo has been added to the toDos state.
        setInput("")
    }

  return (
    <form className='todo-form' onSubmit={handleSubmit}> 
        <input ref={inputRef} type='text' placeholder={props.edit? "Update your item" : "Add your new item"} value={input} className={`todo-input ${props.edit ? "edit" : ""}`} onChange={handleChange}/> {/*controlled input by input state variable*/}
        <button className={`todo-button ${props.edit ? "edit" : ""}`}>{props.edit? "Update" : "Add Todo"}</button>
    </form>
  )
}

export default TodoForm
