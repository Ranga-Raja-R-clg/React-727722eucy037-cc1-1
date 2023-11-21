import React, { useState } from "react";
import Button from "@mui/material/Button";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  function increment() {
    setCount(count + 1);
  }
  return (
    <div className="App">
      <h3>Count: {count}</h3>
      <Button onClick={increment} variant="contained" color="success">
        Increment
      </Button>
    </div>
  );
}

export default App;
