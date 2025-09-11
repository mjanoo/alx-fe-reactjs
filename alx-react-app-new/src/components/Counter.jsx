import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div
      style={{
        border: '1px solid gray',
        padding: '20px',
        borderRadius: '8px',
        maxWidth: '300px',
        margin: '20px auto',
        textAlign: 'center',
        backgroundColor: '#f9f9f9'
      }}
    >
      <h2>Simple Counter</h2>
      <p style={{ fontSize: '18px', marginBottom: '15px' }}>Current Count: {count}</p>
      <button
        onClick={() => setCount(count + 1)}
        style={{ margin: '5px', padding: '8px 15px', cursor: 'pointer' }}
      >
        Increment
      </button>
      <button
        onClick={() => setCount(count - 1)}
        style={{ margin: '5px', padding: '8px 15px', cursor: 'pointer' }}
      >
        Decrement
      </button>
      <button
        onClick={() => setCount(0)}
        style={{ margin: '5px', padding: '8px 15px', cursor: 'pointer' }}
      >
        Reset
      </button>
    </div>
  );
}

export default Counter;
