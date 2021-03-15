import React, { useState } from "react";

export default function Dark() {
  let fnt;
  const [txtalgn, setTxtAlgn] = useState("left");
  const [drkMode, setDarkMode] = useState("black");
  if (drkMode === "black") fnt = "white";
  else fnt = "black";
  return (
    <div>
      <nav
        style={{ display: "block", backgroundColor: "orange", height: "50px" }}
      >
        <span
          style={{
            position: "relative",
            left: "-5rem",
            fontSize: "2rem"
          }}
        >
          ☰{" "}
        </span>
        <button
          id="outerSwitch"
          style={{
            position: "relative",
            left: "5rem",
            backgroundColor: "pink",
            textAlign: txtalgn
          }}
          onClick={() => {
            if (txtalgn === "left") {
              setTxtAlgn("right");
              setDarkMode("white");
            } else {
              setTxtAlgn("left");
              setDarkMode("black");
            }
          }}
        >
          <button
            id="innerSwitch"
            style={{ backgroundColor: "lightpink" }}
          ></button>
        </button>
      </nav>
      <small style={{ display: "none" }}>
        {(document.body.style.backgroundColor = drkMode)}
        {(document.body.style.color = fnt)}
      </small>
    </div>
  );
}
