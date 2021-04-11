import { Link } from "react-router-dom";
import TodoForm from "../../components/TodoForm";
import TodoList from "../../components/TodoList";
import React, { useEffect, useState } from "react";
import "./styles.css";

const LOCAL_STORAGE_KEY = "react-todo-list-todos";

function Home() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storageTodos) {
      setTodos(storageTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  function addTodo(todo) {
    setTodos([todo, ...todos]);
  }

  function toggleComplete(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
  }

  function removeTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <div>
      <div className="container-header-home">
        <h1>Verzel</h1>
        <div className="container-header-user">
          <Link
            className="nav-link navcolor"
            to="/About"
            style={{ color: "#fff" }}
          >
            About
          </Link>

          <Link
            className="nav-link navcolor"
            id="container-header-user"
            to="/home"
          >
            Adicionar tarefa
            <span className="sr-only"></span>
          </Link>
        </div>
      </div>

      <div className="container-home-task">
        <h1>Tarefas</h1>
        <div></div>
      </div>
      <div className="App">
        <div id="container-tasks">
          <TodoForm addTodo={addTodo} />
        </div>
        <div id="container-task">
          <TodoList
            id="tasks"
            todos={todos}
            removeTodo={removeTodo}
            toggleComplete={toggleComplete}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
