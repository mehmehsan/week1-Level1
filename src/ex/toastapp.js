import { useState } from "react";

export default function ToastApp() {
  const [btnVal, setbtnVal] = useState(true);

  return (
    <div>
      {btnVal && <h1> This is a toat </h1>}
      <input
        type="button"
        value={btnVal ? "Hide Toast" : "Show Toast"}
        onClick={() => {
          if (btnVal === true) setbtnVal(false);
          else setbtnVal(true);
        }}
      />
    </div>
  );
}
