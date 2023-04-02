import React from 'react'

export const TodoItem = ({todo,onDelete}) => {
  
  return (<>
   <h4>{todo.sno}. {todo.title}</h4>
    <p>{todo.desc}</p>
    <button className="btn btn-sm btn-danger my-2" onClick={()=>{onDelete(todo)}}>Delete</button>
  
  </>
  
  )
  
}
