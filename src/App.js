import logo from "./logo.svg";
import "./App.css";
import MyComponent from "./MyComponent";
import Counter from "./Counter";
import Say from "./Say";
import Info from "./Info";
import { useState } from "react";

const App = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <button
        onClick={() => {
          setVisible(!visible);
        }}
      >
        {visible ? "숨기기" : "보이기"}
      </button>
      <hr />
      {!visible && <Info />}
    </div>
  );
};

export default App;
