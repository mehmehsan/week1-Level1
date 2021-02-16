import React from "react";
import { BrowserRouter } from "react-router-dom";
import Main from "./rout/main";
import Header from "./rout/header";

export default function Router() {
  return (
    <div>
      <h1> React Router </h1>
      <BrowserRouter>
        <Header />
        <Main />
      </BrowserRouter>
    </div>
  );
}
