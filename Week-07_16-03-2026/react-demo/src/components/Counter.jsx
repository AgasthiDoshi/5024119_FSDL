// components/Counter.jsx
// Demonstrates: useState, event handlers, conditional styling

import { useState } from 'react';

function Counter() {
  // useState returns [currentValue, setterFunction]
  const [count, setCount] = useState(0);
  const [history, setHistory] = useState([]);

  const increment = () => {
    setCount(count + 1);
    setHistory(prev => [...prev, `+1 → ${count + 1}`]);
  };

  const decrement = () => {
    setCount(count - 1);
    setHistory(prev => [...prev, `-1 → ${count - 1}`]);
  };

  const reset = () => {
    setCount(0);
    setHistory(prev => [...prev, `reset → 0`]);
  };

  return (
    <div className="counter">
      <div className={`counter-display ${count > 0 ? 'count-pos' : count < 0 ? 'count-neg' : ''}`}>
        {count}
      </div>

      <div className="counter-buttons">
        <button className="btn btn-dec" onClick={decrement}>− Decrement</button>
        <button className="btn btn-reset" onClick={reset}>Reset</button>
        <button className="btn btn-inc" onClick={increment}>+ Increment</button>
      </div>

      {/* Render list from state array */}
      {history.length > 0 && (
        <div className="counter-history">
          <p className="history-label">State history</p>
          <div className="history-list">
            {history.slice(-5).map((entry, i) => (
              <span key={i} className="history-entry">{entry}</span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Counter;
