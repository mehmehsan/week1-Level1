import React, { useState } from "react";

import { ReactComponent as Img } from "./shopping-cart.svg";

var cntt = 0;

function AddDescription() {
  let cartTotal = 0;
  const [fnt, setFnt] = useState();
  const [cnt, setCnt] = useState();
  const [bck, setBck] = useState();
  const [cartDisp, setcartDisp] = useState(true);
  // const [ProdView, setProdView] = useState(<ProductItem />);
  const [cartObj, setCartObj] = useState([
    {
      labl: "Watches",
      cnt: 0,
      price: " Rs 800 ",
      id: "1",
      discount: " 40% off ",
      src:
        "https://images-na.ssl-images-amazon.com/images/I/814d7DPCPfL._UL1500_.jpg"
    },
    {
      labl: "Fashion",
      cnt: 0,
      price: " Rs 800 ",
      id: "2",
      discount: " 40% off ",
      src:
        "https://images-na.ssl-images-amazon.com/images/I/61A7Nn85EJL._UL1500_.jpg"
    },
    {
      labl: "Men",
      cnt: 0,
      price: " Rs 800 ",
      id: "3",
      discount: " 40% off ",
      src:
        "https://images-na.ssl-images-amazon.com/images/I/61xXzmOiS4L._UL1467_.jpg"
    },
    {
      labl: "Jewellery",
      cnt: 0,
      price: " Rs 800 ",
      id: "4",
      discount: " 40% off ",
      src: "https://m.media-amazon.com/images/I/51viOs7ddqL._SL250_.jpg"
    },
    {
      labl: "DialWatches",
      cnt: 0,
      price: " Rs 800 ",
      id: "5",
      discount: " 40% off ",
      src: "https://images-na.ssl-images-amazon.com/images/I/41NNz935xpL.jpg"
    },
    {
      labl: "G-shirts",
      cnt: 0,
      price: " Rs 800 ",
      id: "6",
      discount: " 40% off ",
      src:
        "https://images-na.ssl-images-amazon.com/images/I/61Z4kXc6JSL._UL1440_.jpg"
    },
    {
      labl: "NeckLaces",
      cnt: 0,
      price: " Rs 800 ",
      id: "7",
      discount: " 40% off ",
      src:
        "https://images-na.ssl-images-amazon.com/images/I/71D71wj7KML._UL1500_.jpg"
    }
  ]);

  const [txtalign, setTxtalign] = useState("left");

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

  function CartList() {
    console.log(cartObj[1].cnt);

    return (
      <div>
        <ul>
          {cartObj.map((item) => (
            <li>{item.cnt > 0 && item.labl}</li>
          ))}
        </ul>
      </div>
    );
  }
  return (
    <div className="App" style={{ color: fnt }}>
      <header className="header">
        <img
          id="symbol"
          src="https://media.tenor.com/images/3cb35d3e2cd245a3322923c4eb54c0bf/tenor.gif"
          alt="loading"
          width="5rem"
        />
        <label id="name"> Flanbieuto</label>

        <select id="searchBar">
          <option> All </option>
          <option> Fashion </option>
          <option> Electronics </option>
          <option> Books </option>
          <option> Baby </option>
          <option> Watches </option>
          <option> Today's Deals</option>
        </select>

        <input type="text" id="searchip" />
        <input type="button" value="🔍" id="button" />
      </header>
      <Img className="Img" width="2rem" onClick={() => setcartDisp(false)} />

      <nav id="nav">
        <ul>
          {cartObj.map((item, index) => (
            <li key={index}>{item.labl}</li>
          ))}
        </ul>
      </nav>
      <div id="cartTotal">
        {
          (cartObj.map((item) => {
            cartTotal = cartTotal + item.cnt;
          }),
          cartTotal)
        }
      </div>

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
        width="80%"
      />

      <small style={{ display: "none" }}>
        {(document.body.style.backgroundColor = bck)}
        {(document.body.style.color = fnt)}
      </small>

      <br />
      <br />
      <br />
      {cartDisp && (
        <div>
          <ul id="ProdItem">
            {cartObj.map((item, index) => (
              <li key={index}>
                <img src={item.src} alt="loading" height="50px" width="50px" />
                <div> {item.labl}</div>
                <div>
                  {item.price}
                  <label style={{ color: "red" }}>{item.discount} </label>
                </div>
                <div> {item.taxText} </div>
                <button
                  id={item.id}
                  onClick={() => {
                    setCartObj(
                      [
                        ...cartObj,
                        (cartObj[+item.id - 1].cnt =
                          cartObj[+item.id - 1].cnt + 1)
                      ].splice(0, cartObj.length)
                    );
                  }}
                >
                  Add to Cart
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
      {!cartDisp && (
        <div>
          <img
            src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/whatsapp/273/left-arrow_2b05-fe0f.png"
            alt="loading"
            width="50rem"
            onClick={() => setcartDisp(true)}
          />
          <ul id="ProdItem">
            {cartObj.map(
              (item, index) =>
                item.cnt > 0 && (
                  <li key={index}>
                    <img
                      src={item.src}
                      alt="loading"
                      height="50px"
                      width="50px"
                    />
                    <div> {item.labl}</div>
                    <div>
                      {item.price}
                      <label style={{ color: "red" }}>{item.discount} </label>
                    </div>
                    <div> {item.taxText} </div>
                    <button
                      id={item.id}
                      onClick={() => {
                        setCartObj(
                          [
                            ...cartObj,
                            (cartObj[+item.id - 1].cnt =
                              cartObj[+item.id - 1].cnt + 1)
                          ].splice(0, cartObj.length)
                        );
                      }}
                    >
                      +
                    </button>
                    <input type="number" value={item.cnt} />
                    <button
                      id={item.id}
                      onClick={() => {
                        setCartObj(
                          [
                            ...cartObj,
                            (cartObj[+item.id - 1].cnt =
                              cartObj[+item.id - 1].cnt - 1)
                          ].splice(0, cartObj.length)
                        );
                      }}
                    >
                      -
                    </button>
                  </li>
                )
            )}
          </ul>
        </div>
      )}
    </div>
  );
}

export default function CartHandler(cartObj) {
  return (
    <div className="App">
      <AddDescription />
    </div>
  );
}
