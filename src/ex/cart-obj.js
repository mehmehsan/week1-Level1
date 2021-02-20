import React, { useState } from "react";

export default function CartHand() {
  const [input, setInput] = useState();
  const [list, setList] = useState([["Here we are", true],["And we go ",false]]);

  
  function clkHandler(e) {
        console.log(list[+e.target.id].[0]);
        list[+e.target.id].[1]=!list[+e.target.id].[1];
        
        setList([...list,[,!list[+e.target.id].[1]]].splice(0,list.length));
   }
  

  function handleSubmit() {
    setList([...list, [input, true]]);
  }
  return (
    <div>
      <h1> To do List </h1>
      <input type="text" onChange={(e) => setInput(e.target.value)} />
      <button onClick={handleSubmit}> Add To List </button>
      <ul>
        {list.map((item, index) => (
          <li key={index}
            >
         
            {item[1] === false && <s>{item}</s>}
            {item[1] !== false && <span>{item}</span>}
            <br />
            <button id={index} onClick={clkHandler}>
              Done
            </button>
          
          </li>
        ))}
      </ul>
     
    </div>
  );
}
