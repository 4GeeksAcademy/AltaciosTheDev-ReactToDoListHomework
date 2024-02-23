import React, {useState} from "react"

export default function TodoItem({isCompleted, id, task, handleIsCompleted, handleDeletion}){
    const [showBtn, setShowBtn] = useState(false)

    return (
        <div className="itemWrapper" onMouseEnter={() => setShowBtn(true)} onMouseOut={() => setShowBtn(false)}>
            <li>
                <label>
                    <input type="checkbox" checked={isCompleted} onChange={(e) => handleIsCompleted(id, e.target.checked)}/>
                    {task}
                </label>
                {showBtn && <button className="btn btn-danger" onClick={() => handleDeletion(id)}>Delete</button>}
            </li>
        </div>

    )
}