import { useState } from "react";

function AddTodoForm({ addTodo }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(input);
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add new todo"
        data-testid="todo-input"
      />
      <button type="submit" data-testid="add-btn">
        Add
      </button>
    </form>
  );
}

export default AddTodoForm;
