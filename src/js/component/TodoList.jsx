import React, {useState, useEffect} from 'react'
import TodoForm from './TodoForm'
import TodoWrapper from './TodoWrapper';

function TodoList() {
    
    //1)toDos state variable that will be an array to house all toDo objects.
    const [toDos, setToDos] = useState([])

    //2)function that will allow for the addition of a new toDo object into the toDos array. It receives as parameter, the toDo created at the moment of submission in the todoForm.
    const addToDo = (newToDo) => {
        //2.1condition to only add new to do if not empty or not only white space
        if(/^\s*$/.test(newToDo.text)){
            return
        }
        else{
        //2.2 add newToDo to the front of the toDos state []
            setToDos((prevToDos) => [newToDo,...prevToDos])    
        }    
    }

    //6. function that will take care to edit the toDo
    const updateToDo = (id, newToDo) =>{
        if(/^\s*$/.test(newToDo.text)){
            return
        }
        else{
            setToDos((prevToDos) => {
                return prevToDos.map(prevToDo => {
                    return prevToDo.id === id ? newToDo : prevToDo
                })
            })    
        }
    }


    //5.function that will toggle the isComplete property of the toDo object 
    const completeToDo = (id) => {
        setToDos(prevToDos => {
            return prevToDos.map(prevToDo => {
                return prevToDo.id === id ? {...prevToDo, isComplete: !prevToDo.isComplete} : prevToDo
            })
        })
    }
    //4. function that will eliminate the todo object that matches the id of the toDo given as parameter
    const removeToDo = (id) => {
        //4.1 filter array to return all BUT the matching id toDo
        let toDosMinusOne =  toDos.filter((toDo, index) => {
            return toDo.id != id
        })
        //4.2 setToDos state array to the newly filtered
        setToDos(toDosMinusOne)
    }

    
    //3.1 render the Form and send the addToDo function as prop.
    //3.2 render the todo and create the component to do 
  return (
    <div>
        <h1>What's the plan for Today?</h1>
        <TodoForm submitToDo={addToDo}/>
        <TodoWrapper toDos={toDos} completeToDo={completeToDo} removeToDo={removeToDo} updateToDo={updateToDo}/>
    </div>
  )
}

export default TodoList
