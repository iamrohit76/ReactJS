import { useState } from "react"

function Todo() {
    const [newTodo, setNewTodo]= useState('')
    const [todos, setTodos]= useState([]);

    const handleSubmit = (e)=>{
         e.preventDefault();

         if(newTodo){
            setNewTodo([...todos, {text:newTodo, completed:false}])
         }
    }

    const handleDelete = (index)=>{
   
    }
  return (
    <div>
      <h1>Todo App</h1>
      <form action="" onSubmit={handleSubmit}>
        <input type="text " placeholder="Add new todos" value={newTodo} onChange={(e)=>setNewTodo(e.target.value) } />
        <button onClick ={()=> setTodos([...todos, newTodo])}type="submit">Add Todo</button>
      </form>

      <ul>
        {todos.map((todo, index)=>{
            return <li key={index}>
                <span>todo.text</span>
                <button onClick={()=> handleDelete(index)}>Delete</button>
            </li>

        })}
      </ul>
    </div>
  )
}

export default Todo
