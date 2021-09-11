import React, { useState } from "react";
import Todolist from "./Todolist";
function App() {
const[todos, setTodos] = useState([])
  return (
    <>
      <Todolist />
      <input type="text" />
      <button> Add Todo</button>
      <button> Clear Completed </button>
      <div> 0 Pending Todo</div>
    </>
  );
}

export default App;
