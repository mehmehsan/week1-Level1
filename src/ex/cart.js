import React, { useState } from "react";
import CartList from "./cartlist";
import { ReactComponent as Img } from "./shopping-cart.svg";
import "./cartstyle.css";

var cntt = 0;

function AddDescription() {
  let cartTotal = 0;
  const [fnt, setFnt] = useState();
  const [cnt, setCnt] = useState();
  const [bck, setBck] = useState();
  const [cartObj, setCartObj] = useState([
    { labl: "Watches", cnt: 0 },
    { labl: "Fashion", cnt: 0 },
    { labl: "Men", cnt: 0 },
    { labl: "Jewellery", cnt: 0 },
    { labl: "DialWatches", cnt: 0 },
    { labl: "G-shirts", cnt: 0 },
    { labl: "NeckLaces", cnt: 0 }
  ]);

  const [txtalign, setTxtalign] = useState("Normal mode");

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

  function ProductItem(props) {
    return (
      <li id={props.id}>
        <img className={props.clss} src={props.src} alt="loading" />
        <br />
        <div>{props.discription}</div>
        <div>
          <strong style={{ color: "red" }}>{props.discount}</strong>
          {props.price}
        </div>
        <small> {props.taxText}</small>
        <br />
        <button
          id={props.id}
          onClick={() => {
            setCartObj(
              [
                ...cartObj,
                (cartObj[+props.id - 1].cnt = cartObj[+props.id - 1].cnt + 1)
              ].splice(0, cartObj.length)
            );
            // console.log(cartObj[+props.id - 1].cnt);
            // console.log(cartObj);
          }}
        >
          Add to Cart
        </button>
      </li>
    );
  }

  return (
    <div className="App" style={{ color: fnt }}>
      <header className="header">
        <img
          id="symbol"
          src="https://media.tenor.com/images/3cb35d3e2cd245a3322923c4eb54c0bf/tenor.gif"
          alt="loading"
          width="100rem"
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

        <Img className="Img" onClick={<CartList />} />
      </header>
      <nav>
        <ul>
          {cartObj.map((item) => (
            <li>{item.labl}</li>
          ))}
        </ul>
        <div id="cartTotal">
          {
            (cartObj.map((item) => {
              cartTotal = cartTotal + item.cnt;
            }),
            cartTotal)
          }
        </div>
      </nav>
      <button
        id="outerSwitch"
        style={{ textAlign: txtalign }}
        onClick={darkMode}
      >
        <button id="innerSwitch"></button>
      </button>

      <br />
      <img
        className="event"
        src=" https://m.media-amazon.com/images/G/31/img21/Fashion/Event/V_Day_Flip/AssociateCentral/2148x588_AFVDay.jpg"
        alt="loading"
      />

      <small style={{ display: "none" }}>
        {(document.body.style.backgroundColor = bck)}
        {(document.body.style.color = fnt)}
      </small>
      <ul className="container">
        <ProductItem
          id={"1"}
          discription={"Smart Watches"}
          price={"Rs 800"}
          discount={"40% off "}
          taxText={"inclusive of all tax"}
          clss={"watches"}
          src={
            "https://images-na.ssl-images-amazon.com/images/I/814d7DPCPfL._UL1500_.jpg"
          }
        />
        <ProductItem
          id={"2"}
          discription={"Women's apparel"}
          price={"Rs 800"}
          discount={"40% off "}
          taxText={"inclusive of all tax"}
          clss={"Fashion"}
          src={
            "https://images-na.ssl-images-amazon.com/images/I/61A7Nn85EJL._UL1500_.jpg"
          }
        />
        <ProductItem
          id={"3"}
          discription={"T-shirts"}
          price={"Rs 800"}
          discount={"40% off "}
          taxText={"inclusive of all tax"}
          clss={"Men"}
          src={
            "https://images-na.ssl-images-amazon.com/images/I/61xXzmOiS4L._UL1467_.jpg"
          }
        />
        <ProductItem
          id={"4"}
          discription={"Jewels"}
          price={"Rs 800"}
          discount={"40% off "}
          taxText={"inclusive of all tax"}
          clss={"Jewellery"}
          src={"https://m.media-amazon.com/images/I/51viOs7ddqL._SL250_.jpg"}
        />
        <ProductItem
          id={"5"}
          discription={"DialWatch"}
          price={"Rs 800"}
          discount={"40% off "}
          taxText={"inclusive of all tax"}
          clss={"watches"}
          src={
            "https://images-na.ssl-images-amazon.com/images/I/41NNz935xpL.jpg"
          }
        />
        <ProductItem
          id={"6"}
          discription={"GShirt"}
          price={"Rs 800"}
          discount={"40% off "}
          taxText={"inclusive of all tax"}
          clss={"Fashion"}
          src={
            "https://images-na.ssl-images-amazon.com/images/I/61Z4kXc6JSL._UL1440_.jpg"
          }
        />
        <ProductItem
          id={"7"}
          discription={"neclates"}
          price={"Rs 800"}
          discount={"40% off "}
          taxText={"inclusive of all tax"}
          clss={"Jewellery"}
          src={
            "https://images-na.ssl-images-amazon.com/images/I/71D71wj7KML._UL1500_.jpg"
          }
        />
      </ul>
    </div>
  );
}

export default function CartHandler() {
  return (
    <div className="App">
      <AddDescription />
    </div>
  );
}
