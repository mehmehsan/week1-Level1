import React, { useState } from "react";
import { withRouter } from "react-router-dom";

export default function PostHandler() {
  const [textcount, setTextcount] = useState();
  const [opac, setOpac] = useState(0.01);
  return (
    <div>
      <h1> Post Counter </h1>
      <input
        id="post"
        type="text"
        onChange={(e) => {
          setTextcount(e.target.value);
          setOpac(e.target.value.length / 150);
        }}
      />
      <br />
      <button
        style={{
          height: "3rem",
          width: "3rem",
          background: "red",
          borderRadius: "45%",
          opacity: opac
        }}
      ></button>
      <br />
      {textcount && textcount.length < 150 && (
        <h2>Text count (max - 150 words) : {textcount.length} </h2>
      )}
      {!textcount && <h1> Insert Text </h1>}
      {textcount && textcount.length >= 150 && (
        <h2>Text count : Max- Char reached 150 words </h2>
      )}
      <br />
    </div>
  );
}
