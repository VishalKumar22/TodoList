import { createContext, useContext } from "react";

//Chai aur code video no: 14 context api

export const TodoContext = createContext({
    //properties    
    todos: [
        {
            id: 1,
            todo: " Todo msg",
            completed: false,
        }
    ],
    //functionalities
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
})


export const useTodo = () => {
    return useContext(TodoContext);

    //NOTE : JAb bhi useContext use karinge tab hume usme ek context dena pdega 
    //       ki Hum kis ki baat kar rahe hai,
    //       eg: useContext(iske under hum likhte hai kis ki
    //       baat kar rahe h humre case me TodoContext ki bat kar rahe h hum)
    
}

export const TodoProvider = TodoContext.Provider

