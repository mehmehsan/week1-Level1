import TextLinker from "./ex/textlinker";
import Counter from "./ex/count";
import CartHand from "./ex/cart-obj";
import PostHandler from "./ex/post";
import PassMatcher from "./ex/passmatch";
import CartHandler from "./ex/cart";

import Router from "./ex/router";
import React from "react";

export default function App() {
  return (
    <div className="App">
      <Counter />
      <hr />
      <CartHand />
      <hr />
      <PostHandler />
      <hr />
      <PassMatcher />
      <hr />
      <TextLinker />
      <hr />
      <CartHandler />
      <hr />
      <Router />
    </div>
  );
}
