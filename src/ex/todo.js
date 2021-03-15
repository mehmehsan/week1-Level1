import React, { useState } from "react";


export default function ToDo() {
  const [input, setInput] = useState();
  const [list, setList] = useState([["Here we are", true],["And we go ",false]]);
 const [active,setActive] = useState([]);
 const[completed,setCompleted] = useState([]);
 
  
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
     <br/ >
     

   
      
      <ul id="Todo">
        {list.map((item, index) => (
          <li key={index}
            >
         
            {   item[1] === false && <s>{completed&&item}</s>}
            { item[1] !== false && <span>{active && item}</span>}
            <br />
            <button id={index} onClick={clkHandler}>
              Done
            </button>
            <br/>
           
          
          </li>
        ))}
      </ul>
     
    </div>
  );
}
