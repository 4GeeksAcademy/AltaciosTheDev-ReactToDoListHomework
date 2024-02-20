import React from "react";
import TodoList from "./TodoList";

//create your first component
const Home = () => {
	return (
		<div className="todo-app">
			<TodoList/>
		</div>
	);
};

export default Home;
