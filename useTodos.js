import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";


const initialState=[];

const init =() =>{
    return JSON.parse(localStorage.getItem('todos')) || [];
  }

export const useTodos = () => {

const [todos, dispatch] = useReducer(todoReducer, initialState,init);

useEffect(()=>
{localStorage.setItem('todos',JSON.stringify(todos))},
[todos],
)


const handleNewTodo=(todo)=>{

const action={
  type:'[TODO] Add Todo',
  payload:todo
}
dispatch(action)
  //console.log("viene aca",{todo});
}

const handleDeleteTodo=(id)=>{
console.log(id);
const remove={
  type:'[TODO] Remove Todo',
  payload:id
}
dispatch(remove)
//console.log("viene aca",{todo});

}
const handleToggleTodo =(id)=>{

const toggle={
  type:'[TODO] Toggle Todo',
  payload:id
}
dispatch(toggle)
}


return {
    todos,
    todosCount:todos.length,
    todosPendiente:todos.filter(todo=>!todo.done).length,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo

}
}
