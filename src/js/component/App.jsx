import React, {useEffect, useState} from "react";
import NewTodoForm from "./NewTodoForm";
import TodoList from "./TodoList";
import { nanoid } from "nanoid";

//create your first component
const App = () => {
	const [todos, setTodos] = useState(() => {
		const localValue = localStorage.getItem("ITEMS")

		if(localValue == null){
			return []
		}
		else{
			return JSON.parse(localValue)
		}
	})

	//localStorage is another businesss
	useEffect(() => {
		//storing to local storage every time todos change
		localStorage.setItem("ITEMS", JSON.stringify(todos))
	}, [todos])

	function addTodo(newTask){
		let newTodo = {
			id: nanoid(),
			task: newTask,
			isCompleted: false
		}
		setTodos((prevTodos) => {
			return [newTodo, ...prevTodos]
		})
	}

	function handleIsCompleted(id, isCompleted){
		setTodos(prevTodos => {
			return prevTodos.map((prevTodo) => {
				return prevTodo.id === id ? {...prevTodo, isCompleted} : prevTodo
			})
		})
	}

	function handleDeletion(id){
		setTodos(prevTodos => {
			return prevTodos.filter(prevTodo => prevTodo.id !== id)
		})
	}

	return (
		<>
			<NewTodoForm addTodo={addTodo}/>
			<h1 className="header">Todo List</h1>
			<TodoList todos={todos} handleDeletion={handleDeletion} handleIsCompleted={handleIsCompleted}/>
		</>
	);
};

export default App;
