# Hello from our To Do List: 

Important discoveries on the project. 

TODO FORM COMPONENT:
Onsubmit is triggered by the following:
    1)clicking submit button within the form 
    2)pressing Enter when focused on an input field

Console logging state on handler function:
    PROBLEM
        State is async, so when we set state in a handler and then console log, it will log first and setState later, so the value logged will always be before the change.
    SOLUTION
        console log in useEffect, which is guaranteed to run AFTER the component has rendered. 
            1)handle function changes state 
            2)component renders 
            3)useEffect runs with the console log

Importance of useRef in UX:
    Every time the component renders, will AUTO FOCUS to the input, thus avoiding the need to constantly clicking in the input to write. 

TODO LIST COMPONENT: 
    Modifying toDos state array based off a function that toggles the complete property 

    1)Create new variable and map over directly, finally set the state to the variable modified

         let updatedToDos = toDos.map(toDo => {
             if(toDo.id === id){
                 toDo.isComplete = !toDo.isComplete
             }
             return toDo
         })
         setToDos(updatedToDos)

    2)Work directly inside the set function 

        setToDos(prevToDos => {
            return prevToDos.map(prevToDo => {
                return prevToDo.id === id ? {...prevToDo, isComplete: !prevToDo.isComplete} : prevToDo
            })
        })

        
    
