import {
    createContext,
    useContext,
    useState,
    useMemo,
    useCallback,
  } from "react";
  
  const TodoContext = createContext();
  
  export function TodoProvider({ children }) {
    // Estado principal das tarefas
    const [todos, setTodos] = useState([]);
    const [filter, setFilter] = useState("all"); // 'all' | 'completed' | 'pending'
  
    // Adiciona nova tarefa
    const addTodo = useCallback((text) => {
      setTodos((prev) => [
        ...prev,
        { id: Date.now(), text, completed: false },
      ]);
    }, []);
  
    // Alterna tarefa como concluída/pending
    const toggleTodo = useCallback((id) => {
      setTodos((prev) =>
        prev.map((todo) =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo
        )
      );
    }, []);
  
    // Remove tarefa
    const removeTodo = useCallback((id) => {
      setTodos((prev) => prev.filter((todo) => todo.id !== id));
    }, []);
  
    // Lista filtrada com base no filtro
    const filteredTodos = useMemo(() => {
      switch (filter) {
        case "completed":
          return todos.filter((todo) => todo.completed);
        case "pending":
          return todos.filter((todo) => !todo.completed);
        default:
          return todos;
      }
    }, [todos, filter]);
  
    return (
      <TodoContext.Provider
        value={{
          todos: filteredTodos,   // lista filtrada
          addTodo,                // adiciona tarefa
          toggleTodo,             // alterna tarefa
          removeTodo,             // remove tarefa
          filter,                 // filtro atual
          setFilter,              // função para alterar filtro
        }}
      >
        {children}
      </TodoContext.Provider>
    );
  }
  
  // Hook customizado para acessar o contexto
  export function useTodos() {
    return useContext(TodoContext);
  }
  