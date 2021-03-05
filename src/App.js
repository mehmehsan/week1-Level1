import MyFigma from "./ex/myfigma";
import Counter from "./ex/count";
import ToDo from "./ex/todo";
import PostHandler from "./ex/post";
import PassMatcher from "./ex/passmatch";
import CartHandler from "./ex/cart";
import "./styles.css";

import Router from "./ex/router";
import React, { useState } from "react";

export default function App() {
  const [array, setArray] = useState(<CartHandler />);
  const arr = [
    "Counter",
    "MyFigma",
    "Todo",
    "PostHandler",
    "PassMatcher",
    "CartHandler",
    "Router"
  ];

  return (
    <div className="App">
      <header style={{ background: "none" }}>
        <h1>
          NeogCamp <br /> Week 1
        </h1>
      </header>

      <strong style={{ margin: "auto", textAlign: "center" }}>
        <ul>
          {arr.map((item, index) => (
            <li
              key={index}
              onClick={() => {
                if (item === "Counter") setArray(<Counter />);
                else if (item === "MyFigma") setArray(<MyFigma />);
                else if (item === "Todo") setArray(<ToDo />);
                else if (item === "PostHandler") setArray(<PostHandler />);
                else if (item === "PassMatcher") setArray(<PassMatcher />);
                else if (item === "CartHandler") setArray(<CartHandler />);
                else if (item === "Router") setArray(<Router />);
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      </strong>
      {array}
    </div>
  );
}
