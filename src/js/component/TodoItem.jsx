import React from "react"

export default function TodoItem({isCompleted, id, task, handleIsCompleted, handleDeletion}){
    return (
        <li>
            <label>
                <input type="checkbox" checked={isCompleted} onChange={(e) => handleIsCompleted(id, e.target.checked)}/>
                {task}
            </label>
            <button className="btn btn-danger" onClick={() => handleDeletion(id)}>Delete</button>
        </li>
    )
}