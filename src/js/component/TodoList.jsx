import React, {useState, useEffect} from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo';

function TodoList() {
    //state variable storing the toDos
    const [toDos, setToDos] = useState([])

    //Every time toDos change, console log them out
     useEffect(() => {
         console.log(toDos);
     }, [toDos]);

    //function that will allow for the addition of a new toDo object into the toDos array.
    const addToDo = (newToDo) => {
        //Will check the toDo text property for empty text or just whitespaces, in this case returns(exits) from the function.
        if(!newToDo.text || /^\s*$/.test(newToDo.text)){
            return
        }
        else{
            setToDos((prevToDos) => [newToDo,...prevToDos])    
        }    
    }

    //function that will take care to edit the toDo
    const updateToDo = (id, newToDo) =>{
        if(!newToDo.text || /^\s*$/.test(newToDo.text)){
            return
        }
        else{
            setToDos((prevToDos) => {
                return prevToDos.map(toDo => {
                    return toDo.id === id ? newToDo : toDo
                })
            })    
        }
    }


    //function that will toggle the isComplete property of the toDo object 
    const completeToDo = (id) => {
        let updatedToDos = toDos.map(toDo => {
            if(toDo.id === id){
                toDo.isComplete = !toDo.isComplete
            }
            return toDo
        })
        setToDos(updatedToDos)
    }
    //function that will eliminate the todo object that matches the id given as parameter
    const removeToDo = (id) => {
        let toDosMinusOne =  toDos.filter((toDo, index) => {
            return toDo.id != id
        })
        setToDos(toDosMinusOne)
    }

    

  return (
    <div>
        <h1>What's the plan for Today?</h1>
        <TodoForm addToDo={addToDo}/>
        <Todo toDos={toDos} completeToDo={completeToDo} removeToDo={removeToDo} updateToDo={updateToDo}/>
    </div>
  )
}

export default TodoList
