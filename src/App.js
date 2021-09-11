import React, { useState } from "react";
import Todolist from "./Todolist";
function App() {
  const [todos, setTodos] = useState([
    { id: 1, name: "Todo 1", complete: false },
  ]);
  return (
    <>
      <Todolist todos={todos} />
      <input type="text" />
      <button> Add Todo</button>
      <button> Clear Completed </button>
      <div> 0 Pending Todo</div>
    </>
  );
}

export default App;
