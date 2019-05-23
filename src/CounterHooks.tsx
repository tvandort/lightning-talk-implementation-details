import React, { useState } from "react";
import Button from "./components/Button";

const ClickCounter = () => {
  const [count, setCount] = useState(0);
  const add = () => setCount(count + 1);
  const subtract = () => setCount(count - 1);

  return (
    <div className="Counter">
      <div>
        <label htmlFor="count">
          Count: <span id="count">{count}</span>
        </label>
      </div>
      <div className="Buttons">
        <Button onClick={add}>Add</Button>
        <Button onClick={subtract}>Sub</Button>
      </div>
    </div>
  );
};

export default ClickCounter;
