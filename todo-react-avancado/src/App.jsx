import { TodoProvider } from "./context/TodoContext";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import FilterButtons from "./components/FilterButtons";

export default function App() {
  return (
    <TodoProvider>
      <div className="app-container">
        <h1>Lista de Tarefas</h1>
        <TodoForm />
        <FilterButtons />
        <TodoList />
      </div>
    </TodoProvider>
  );
}
