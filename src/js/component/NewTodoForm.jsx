import React, {useState, useRef, useEffect} from "react"


export default function NewTodoForm({addTodo}){
    const [newTask, setNewTask] = useState("")
    const taskRef = useRef()

    useEffect(() => {
		taskRef.current.focus()
	})

    function handleSubmit(e){
        e.preventDefault()

        if(/^\s*$/.test(newTask) === false){
            addTodo(newTask)
            setNewTask("")
        }
        else{
            return 
        }
	}	

    return (
        <form className="new-item-form" onSubmit={handleSubmit}>
            <div className="form-row">
                <label htmlFor="item">New Item</label>
                <input ref={taskRef} value={newTask} type="text" id="item" onChange={(e) => setNewTask(e.target.value)}/>
            </div>
            <button className="btn">Add</button>
        </form>
    )
}