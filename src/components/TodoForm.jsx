// src/components/TodoForm.jsx
import { useState } from "react";
import { useTodos } from "../context/TodoContext";

export default function TodoForm() {
  const [text, setText] = useState("");
  const { addTodo } = useTodos();

  function handleSubmit(e) {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text);
      setText("");
    }
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "1rem" }}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Digite uma tarefa"
      />
      <button type="submit">Adicionar</button>
    </form>
  );
}
