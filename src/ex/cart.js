import React, { useState } from "react";
import { ReactComponent as Img } from "./shopping-cart.svg";
import "./cartstyle.css";

var cntt = 0;

// const allProducts = {
//   // ALL: [
//   //   "MARICO : 9/10 ",
//   //   "ITC : 8/10 ",
//   //   "INFOSYS : 7/10 ",
//   //   "DIVISLAB : 6/10 ",
//   //   "RELAXO : 5/10 "
//   // ],

//   Fashion: ["MARICO ", "ITC "],

//   Electronics: "INFOSYS",

//   Books: "DIVISLAB",

//   Baby: "HDFC",

//   Watches: "INDRAPRASTHA GAS",

//   Others: "RELAXO"
// };

// var setProducts = Object.keys(allProducts);

export default function CartHandler() {
  const [fnt, setFnt] = useState();
  const [cnt, setCnt] = useState();
  const [bck, setBck] = useState();
  const [txtalign, setTxtalign] = useState("Normal mode");
  const [cart, setCart] = useState(0);

  const [scont, setScount] = useState(0);
  const [jcont, setJcount] = useState(0);
  const [wcont, setWcount] = useState(0);
  const [wocont, setWocount] = useState(0);

  function dropDown() {
    var x = document.getElementById("navigation");
    if (x.className === "navigation") {
      x.className += " responsive";
    } else {
      x.className = "navigation";
    }
  }

  function darkMode() {
    if (cnt % 2 !== 0) {
      setBck("black");
      setFnt("white");
      setTxtalign("right");
    } else {
      setBck("white");
      setFnt("black");
      setTxtalign("left");
    }
    setCnt(cntt++);
  }

  function dealHandler() {}

  return (
    <div className="App" style={{ color: fnt }}>
      <header className="header">
        <img
          id="symbol"
          src="https://media.tenor.com/images/3cb35d3e2cd245a3322923c4eb54c0bf/tenor.gif"
          alt="loading"
          width="100rem"
          onClick={dealHandler}
        />
        <span id="name"> Flanbieuto</span>
        <span id="searchBar">
          <select>
            <option> All </option>
            <option> Fashion </option>
            <option> Electronics </option>
            <option> Books </option>
            <option> Baby </option>
            <option> Watches </option>
            <option> Today's Deals</option>
          </select>
        </span>
        <input type="text" />
        <input type="button" value="🔍" id="button" />

        <Img className="Img" />
        <div class="relative">
          <strong>{cart}</strong>
        </div>
      </header>
      <nav>
        <ul id="navigation" className="navigation">
          <li>
            <a href="https://amzn.to/2LfWK5c"> All </a>
          </li>
          <li className="navigationPills">
            <a href="https://amzn.to/3cHjhDi"> Fashion </a>
          </li>
          <li className="navigationPills">
            <a href="https://amzn.to/3cD031L"> Electronics </a>
          </li>
          <li className="navigationPills">
            <a href="https://amzn.to/3q1XQAZ"> Consumer Goods</a>
          </li>
          <li className="navigationPills">
            <a href="https://amzn.to/3pQVp3N"> Footwear </a>
          </li>
          <li className="navigationPills">
            <a href="https://amzn.to/3tuOe3x"> Handbags</a>
          </li>
          <li className="navigationPills">
            <a href="https://amzn.to/39Ka23s">Watches</a>
          </li>
          <li className="navigationPills">
            <a href="https://amzn.to/3oOfIxF">Today's Deals</a>
          </li>
          <li className="dropdownIcon" onClick={dropDown}>
            &#9776;
          </li>
        </ul>
      </nav>
      <button
        id="outerSwitch"
        style={{ textAlign: txtalign }}
        onClick={darkMode}
      >
        <button id="innerSwitch"></button>{" "}
      </button>
      <br />
      <br />
      <img
        className="event"
        src=" https://m.media-amazon.com/images/G/31/img21/Fashion/Event/V_Day_Flip/AssociateCentral/2148x588_AFVDay.jpg"
        alt="loading"
      />
      <button id="amznPage">
        <a href="https://amzn.to/2LfWK5c"> View Deals </a>
      </button>

      <div id="item1">
        <img
          className="watches"
          src="https://images-na.ssl-images-amazon.com/images/I/814d7DPCPfL._UL1500_.jpg"
          alt="loading"
          width="30"
          height="50"
        />
        <br />
        <button>
          {" "}
          <a href="https://amzn.to/2YKtMxq"> Shop Now </a>
        </button>
        <br />
        <button
          onClick={() => {
            setWcount(wcont + 1);
            setCart(cart + 1);
          }}
        >
          Add to cart <div>{wcont} </div>
        </button>
      </div>
      <div id="item2">
        <img
          className="jewellery"
          src="https://m.media-amazon.com/images/I/51viOs7ddqL._SL250_.jpg"
          alt="loading"
          width="30"
          height="50"
        />
        <br />
        <button>
          {" "}
          <a href="https://amzn.to/36DzaHi"> Shop Now </a>
        </button>
        <br />
        <button
          onClick={() => {
            setJcount(jcont + 1);
            setCart(cart + 1);
          }}
        >
          Add to cart<div>{jcont} </div>
        </button>
      </div>
      <div id="item3">
        <img
          className="shirts"
          src="https://images-na.ssl-images-amazon.com/images/I/61xXzmOiS4L._UL1467_.jpg"
          alt="loading"
          width="30"
          height="50"
        />
        <br />
        <button>
          {" "}
          <a href="https://amzn.to/3rcZIXE"> Shop Now </a>
        </button>
        <br />
        <button
          onClick={() => {
            setScount(scont + 1);
            setCart(cart + 1);
          }}
        >
          Add to cart<div>{scont} </div>
        </button>
      </div>
      <div id="item4">
        <img
          className="women"
          src="https://images-na.ssl-images-amazon.com/images/I/61A7Nn85EJL._UL1500_.jpg"
          alt="loading"
          width="30"
          height="50"
        />
        <br />
        <button>
          <a href="https://amzn.to/39LrCE2"> Shop Now </a>
        </button>
        <br />
        <button
          onClick={() => {
            setWocount(wocont + 1);
            setCart(cart + 1);
          }}
        >
          Add to cart <div>{wocont} </div>
        </button>
      </div>

      <small style={{ display: "none" }}>
        {(document.body.style.backgroundColor = bck)}
      </small>
    </div>
  );
}
