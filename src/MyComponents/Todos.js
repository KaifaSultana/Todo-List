import React from 'react'
import {TodoItem} from "./TodoItem";
export const Todos = (props) => {
  let myStyle={
    minHeigth: "10vh"
  }
  return (<div className="container my-3" style={myStyle}>
    <h4 className='my-3'>Todo list</h4>
    {props.todos.length === 0? "No Todo to display":
    props.todos.map((todo)=>{
      return(
        <>
        <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>
        <hr/>
        </>
        
    )
    })
    }
    
    
  </div>
    
  )
}
