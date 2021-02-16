import React, { useState } from "react";
import "./style.css";

export default function PostHandler() {
  const [textcount, setTextcount] = useState();
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
      {textcount && <h2>Text count : {textcount.length} </h2>}
    </div>
  );
}
