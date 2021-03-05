import React, { useEffect, useState } from "react";
import "./style.css";

export default function PassMatcher() {
  const [pass, setPass] = useState("");
  const [repass, setRepass] = useState("");
  const [bdr, setBdr] = useState();
  const [type, setType] = useState("password");

  // var reg= /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9]+)\.([a-z]+)(.[a-z]+)?$/;

  var reg = /([0-9])/;
  useEffect(() => {
    if (pass === repass) setBdr("solid 4px green");
    else setBdr("solid 4px red");
  }, [repass]);
  return (
    <div>
      <h1> Pass-Matcher </h1>
      <div id="ipass"> Enter Password : </div>

      <input
        id="pass"
        placeholder="password"
        type="text"
        onChange={(e) => {
          setPass(e.target.value);
        }}
      />

      <div id="ipass"> Re-enter Password : </div>
      <input
        id="repass"
        placeholder="password"
        style={{ border: bdr }}
        type={type}
        onChange={(e) => {
          setRepass(e.target.value);
        }}
      />
      <br />
      <input
        id="check"
        type="checkbox"
        onClick={() => {
          if (type === "password") setType("text");
          else setType("password");
        }}
      />
      <small id="shpass">Show password</small>
      <br />
      <br />
      {!reg.test(pass) && (
        <div style={{ color: "red" }}>Password should contain a number </div>
      )}
      <br />
      {reg.test(pass) && !repass.localeCompare(pass) && (
        <div>
          <button>Submit</button>
        </div>
      )}
      {repass && repass.localeCompare(pass) && (
        <div> Error! Try matching it </div>
      )}
    </div>
  );
}
