import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1> Counter : {count} </h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
      {count > 0 && (
        <button
          onClick={() => {
            setCount(count - 1);
          }}
        >
          -
        </button>
      )}
      <br />
      {count > 0 && (
        <button
          onClick={() => {
            setCount(0);
          }}
        >
          Reset
        </button>
      )}
    </div>
  );
}
