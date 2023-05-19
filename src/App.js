import Keypad from "./Keypad";
import "./App.css";
import { useState } from "react";

function App() {
  const [input, setInput] = useState("");

  function handleClick(value) {
    setInput(input + value);
  }

  function calculate(value) {
    let outputVal = eval(input);
    setInput(outputVal);
  }

  function handleClear() {
    setInput("");
  }

  return (
    <div className="container">
      <h1>Calculator App - React</h1>
      <div className="calculator">
        <input type="text" value={input} className="output" />
        <Keypad
          handleClick={handleClick}
          handleClear={handleClear}
          calculate={calculate}
        />
      </div>
    </div>
  );
}

export default App;
