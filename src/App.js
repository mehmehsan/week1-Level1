import Router from "./ex/router";
import React, { useState } from "react";
import ToastApp from "./ex/toastapp";
import MyFigma from "./ex/myfigma";
import Counter from "./ex/count";
import ToDo from "./ex/todo";
import PostHandler from "./ex/post";
import PassMatcher from "./ex/passmatch";
import CartHandler from "./ex/cart";
import LikeHandler from "./ex/likehandler";

import Dark from "./ex/dark";
import "./styles.css";

export default function App() {
  const [array, setArray] = useState(<PostHandler />);
  const arr = [
    "Counter",
    "MyFigma",
    "Todo",
    "PostHandler",
    "PassMatcher",
    "CartHandler",
    "Router",
    "Likehandler",
    "DarkMode",
    "Toast"
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
                else if (item === "Likehandler") setArray(<LikeHandler />);
                else if (item === "Toast") setArray(<ToastApp />);
                else if (item === "DarkMode") setArray(<Dark />);
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
