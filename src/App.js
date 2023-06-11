import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Count = {count}</h1>
      <button onClick={handleClick}>click</button>
    </div>
  );
};

export default Counter;
