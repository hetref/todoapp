import { useState } from "react";
import TodoList from "./components/TodoList";
import "./App.css";
import { BiBookAdd } from "react-icons/bi";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [todoText, setTodoText] = useState("");

  const addTodo = (e) => {
    e.preventDefault();
    if (todoText.trim() !== "") {
      const newTodo = {
        id: Date.now(),
        text: todoText,
        completed: false,
      };
      setTodos([...todos, newTodo]);
      setTodoText("");
    }
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const markComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div id="mainTodoBox">
      <div id="addTodo">
        <form onSubmit={addTodo}>
          <input
            type="text"
            placeholder="Write a new task"
            value={todoText}
            onChange={(e) => setTodoText(e.target.value)}
          />
          <button type="submit">
            {/* <i className="fa-sharp fa-solid fa-plus"></i> */}
            <BiBookAdd />
          </button>
        </form>
      </div>
      <TodoList todos={todos} onDelete={deleteTodo} onComplete={markComplete} />
    </div>
  );
};

export default App;
