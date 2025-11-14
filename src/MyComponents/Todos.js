import React from 'react'
import TodoItems from './TodoItems.js';

const Todos = (props) => {
  return (
    <div className="container">
      <div className="glass-card">
        <h2 className="glass-heading">Todos List</h2>

        {props.todos.length === 0 ? "No Todos to display" :
          props.todos.map((todo) => {
            return <TodoItems todo={todo} key={todo.sno} onDelete={props.onDelete} />;
          })
        }
      </div>
    </div>
  )
}

export default Todos