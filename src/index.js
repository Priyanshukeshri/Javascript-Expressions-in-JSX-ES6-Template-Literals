import React from "react";
import ReactDOM from "react-dom";

const fName = "Priyanshu";
const lName = "keshri";
const num = 7;

ReactDOM.render(
  <div>
    <h1>
      Hello World! {fName} {lName}
    </h1>
    <p>Your lucky number is {num} </p>
  </div>,
  document.getElementById("root")
);
