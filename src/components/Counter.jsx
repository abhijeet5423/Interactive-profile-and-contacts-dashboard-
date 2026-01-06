import React from 'react'
import { useState } from 'react'
import "./../styles/card.css";

const Counter = ({ label, initialCount = 0 }) => {
  const [count, setCount] = useState(initialCount);

const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const reset = () => {
    setCount(initialCount);
  };
    
  return (
     <div className="counter">
      <h4>{label}</h4>

      <span className="badge">{count}</span>

      <div className="actions">
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  )
}

export default Counter
