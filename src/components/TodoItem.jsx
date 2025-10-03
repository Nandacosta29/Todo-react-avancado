import { memo } from "react";

const TodoItem = memo(({ todo, toggleTodo, removeTodo }) => {
  return (
    <li>
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
  );
});

export default TodoItem;
