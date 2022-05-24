import React, { useReducer } from "react";
import { counterReducer } from "../reducers/counterReducer";
import "../styles/App.css";
const App = () => {
  const [state, dispatch] = useReducer(counterReducer, App);
  // const count = 0;
  return (
    <div id="main">
      <span id="counter">count-{state.count}</span>
      <br></br>
      <button
        id="increment-btn"
        onClick={() => dispatch({ type: "INCREMENTBYONE" })}
      >
        Increment
      </button>
      <br></br>
      <button
        id="decrement-btn"
        onClick={() => dispatch({ type: "DECREMENTBYONE" })}
      >
        Decrement
      </button>
    </div>
  );
};

export default App;
