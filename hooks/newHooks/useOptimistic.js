// Enables optimistic UI updates by immediately reflecting expected changes while async mutations are pending.

// Automatically reconciles UI state when server results arrive, improving perceived responsiveness.

// Ideal for instant feedback in forms or data edits.

import React from "react";
import { useOptimistic } from "react";

function TodoList({ initialTodos }) {
  // Optimistically add new todos before server confirmation
  const [todos, addTodo] = useOptimistic(
    initialTodos,
    (currentTodos, newTodo) => [newTodo, ...currentTodos]
  );

  const handleAddTodo = () => {
    const newTodo = { id: Date.now(), text: "New Task", done: false };
    addTodo(newTodo); // Immediately update UI

    // Simulate async server update
    setTimeout(() => {
      console.log("Server confirmed new todo:", newTodo);
      // Normally sync response would update todos state for real
    }, 1500);
  };

  return (
    <div>
      <button onClick={handleAddTodo}>Add Todo</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
}

// export default TodoList;
// useOptimistic takes initial state (initialTodos) and an update reducer function that inserts a new todo at the start optimistically.

// Calling addTodo(newTodo) immediately updates the UI without waiting for the server.

// The UI stays responsive with instant feedback until the action is confirmed or synchronized later.

// This pattern enhances user experience for interactive forms or data updates.​