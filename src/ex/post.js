import React, { useState } from "react";

export default function PostHandler() {
  const [textcount, setTextcount] = useState(1);

  return (
    <div>
      <h1> Post Counter </h1>
      <input
        id="post"
        type="text"
        onChange={(e) => {
          setTextcount(e.target.value);
        }}
      />
      <br />
      <br />
      <div>
        <svg
          height="10%"
          viewBox="2 0 20 20"
          width="10%"
          style={{ overflow: "visible" }}
        >
          <circle
            cx="50%"
            cy="50%"
            fill="none"
            stroke-width="2"
            r="9"
            stroke="#EBEEF0"
          ></circle>
          <circle
            cx="50%"
            cy="50%"
            fill="none"
            stroke-width="2"
            r="9"
            stroke="grey"
            stroke-linecap="round"
            style={{
              strokeDashoffset: 56.5487 - textcount.length,
              strokeDasharray: "56.5487"
            }}
          ></circle>
        </svg>
      </div>
      {textcount && textcount.length < 56 && (
        <h2>Text count (max - 56 words) : {textcount.length} </h2>
      )}
      {!textcount && <h1> Insert Text </h1>}
      {textcount && textcount.length >= 56 && (
        <h2>Text count : Max- Char reached 56 words </h2>
      )}
      <br />
    </div>
  );
}
