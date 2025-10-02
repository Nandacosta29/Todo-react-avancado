// src/components/TodoList.jsx
import { useTodos } from "../context/TodoContext";

export default function TodoList() {
  const { todos, toggleTodo, removeTodo } = useTodos();

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleTodo(todo.id)}
          />
          <span className={todo.completed ? "concluida" : ""}>
            {todo.text}
          </span>
          <button onClick={() => removeTodo(todo.id)}>X</button>
        </li>
      ))}
    </ul>
  );
}
