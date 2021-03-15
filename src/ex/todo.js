import React, { useState } from "react";

export default function ToDo() {
  const [input, setInput] = useState();
  const [list, setList] = useState([
    {
      description: "Here we are",
      status: true
    },
    { description: "And we go ", status: false }
  ]);

  const [showTaskDone, setTaskDone] = useState(true);
  const [showTaskPending, setPendingTask] = useState(true);

  return (
    <div>
      <h1> To do List </h1>
      <input type="text" onChange={(e) => setInput(e.target.value)} />

      <button
        onClick={() =>
          setList(list.concat({ description: input, status: true }))
        }
      >
        Add To List
      </button>
      <br />
      <button
        onClick={() => {
          setTaskDone(true);
          setPendingTask(true);
        }}
      >
        {" "}
        Show all
      </button>
      <button
        onClick={() => {
          setTaskDone(false);
          setPendingTask(true);
        }}
      >
        Show Completed
      </button>
      <button
        onClick={() => {
          setPendingTask(false);
          setTaskDone(true);
        }}
      >
        Show Pending
      </button>
      <ul>
        {list.map((item, index) => (
          <li
            style={{ display: "list-item", margin: "1rem", padding: "1rem" }}
            key={index}
            onClick={() => {
              if (item.status === true)
                setList(
                  [...list, (item.status = false)].splice(0, list.length)
                );
              else
                setList([...list, (item.status = true)].splice(0, list.length));
            }}
          >
            {showTaskDone && item.status === true && item.description}
            {showTaskPending && item.status === false && (
              <s>{item.description}</s>
            )}
          </li>
        ))}
      </ul>
      <br />
    </div>
  );
}
