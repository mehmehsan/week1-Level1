import React, { useState } from "react";
import "./style.css";

export default function TextLinker() {
  var size;
  const [textSize, setTextSize] = useState(0);

  return (
    <div>
      <h1> My figma </h1>
      <label> Enter size of text you want : </label>
      <input
        id="text"
        type="number"
        onChange={(e) => {
          size = +e.target.value;
          setTextSize(size);
        }}
      />
      <br />
      <br />
      <br />
      {textSize > 0 && <h2> Your text size : {textSize} px </h2>} <br />
      <br />
      <h1 style={{ fontSize: textSize }}> Text </h1>
      <button
        onClick={() => {
          setTextSize(textSize + 8);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          setTextSize(textSize - 8);
        }}
      >
        -
      </button>
    </div>
  );
}
