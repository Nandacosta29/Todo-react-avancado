import { useTodos } from "../context/TodoContext";

export default function FilterButtons() {
  const { filter, setFilter } = useTodos();

  return (
    <div style={{ marginTop: "1rem" }}>
      <button
        onClick={() => setFilter("all")}
        style={{ fontWeight: filter === "all" ? "bold" : "normal" }}
      >
        Todas
      </button>
      <button
        onClick={() => setFilter("completed")}
        style={{ fontWeight: filter === "completed" ? "bold" : "normal" }}
      >
        Concluídas
      </button>
      <button
        onClick={() => setFilter("pending")}
        style={{ fontWeight: filter === "pending" ? "bold" : "normal" }}
      >
        Pendentes
      </button>
    </div>
  );
}
