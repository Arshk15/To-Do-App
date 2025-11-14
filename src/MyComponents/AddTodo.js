import React from 'react'
import './addtodo.css';

function AddTodo({ addTodo }) {
    const [title, setTitle] = React.useState("");
    const [desc, setDesc] = React.useState("");

    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            alert("Title or Description cannot be blank");
            return
        }
        else {
            addTodo(title, desc);
            setTitle("");
            setDesc("");
        }
    }


    return (
        <div className="container my-4 glass-card">
      <h2 className="glass-heading">Add Todo</h2>
      <form onSubmit={submit} className="row g-3 justify-content-center">
        
        <div className="col-md-4">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="glass-input"
            placeholder="Title"
          />
        </div>

        <div className="col-md-4">
          <input
            type="text"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            className="glass-input"
            placeholder="Description"
          />
        </div>

        <div className="col-md-auto">
          <button type="submit" className="glass-button">Add Todo</button>
        </div>

      </form>
    </div>
    );
}


export default AddTodo
