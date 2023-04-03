import React from "react";
import ReactDOM from "react-dom";
import { MathInput } from "../mathInput/mathInput";
import "../style.css";
import "mathquill4keyboard/build/mathquill.css";
import { Example } from "./example";

const Test = () => {
  return (
    <div>
      Test
      <p>
        <MathInput />
      </p>
    </div>
  );
};
ReactDOM.render(<Example />, document.getElementById("root"));
