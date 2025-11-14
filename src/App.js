import React from 'react';
import './App.css';
import Header from './MyComponents/Header.js';
import Todos from './MyComponents/Todos.js';
import Footer from './MyComponents/Footer.js';
import AddTodo from './MyComponents/AddTodo.js';
import About from './MyComponents/About.js';
import { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    console.log("I am onDelete of todo", todo);
    // Deleting this way in react does not work
    // let index = todos.indexOf(todo);
    // todos.splice(index,1);

    settodos(todos.filter((e) => {
      return e !== todo;
    }))
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const addTodo = (title, desc) => {
    let sno = todos.length === 0 ? 1 : todos[todos.length - 1].sno + 1;
    const newTodo = { sno, title, desc };

    settodos([...todos, newTodo]);
    console.log(newTodo);
  }

  const [todos, settodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  return (
    <>
      <Router>
        <Header title="My Todo App" />

        


        <Routes>

          <Route path="/" element={
            <>
              <AddTodo addTodo={addTodo} />
              <Todos todos={todos} onDelete={onDelete} />
            </>
          } />

          <Route path="/about" element={<About />} />

        </Routes>

        <Footer />
      </Router>
    </>
  );
}

export default App;
