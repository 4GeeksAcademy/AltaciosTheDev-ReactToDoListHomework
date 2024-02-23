import React from "react"
import TodoItem from "./TodoItem"

export default function TodoList({todos, handleIsCompleted, handleDeletion}){
    return (
        <ul className="list">
            {/* will render no todos if there are no todos... */}
            {todos.length === 0 && "No tasks, add a task..."} 
            {/* will render the todos if there are todos...  */}
            {todos.map((todo) => {
                return (
                    <TodoItem 
                        {...todo}
                        handleDeletion={handleDeletion}
                        handleIsCompleted={handleIsCompleted}
                        // id={todo.id} 
                        // task={todo.task} 
                        // isCompleted={todo.isCompleted} 
                        key={todo.id}
                    />
                )
            })}
        </ul> 
    )
}