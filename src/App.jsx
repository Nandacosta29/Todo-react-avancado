import React from "react";
import { TodoProvider } from "./context/TodoContext";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import FilterButtons from "./components/FilterButtons"; // ⬅️ Adiciona aqui
import "./App.css";

export default function App() {
  return (
    <TodoProvider>
      <div style={{ maxWidth: "400px", margin: "2rem auto", textAlign: "center" }}>
        <h1>Minha Lista de Tarefas</h1>
        <TodoForm />
        <FilterButtons /> { }
        <TodoList />
      </div>
    </TodoProvider>
  );
}
