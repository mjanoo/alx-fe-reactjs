import React from "react";

function MainContent() {
  return (
    <main
      style={{
        backgroundColor: '#f0f0f0',
        padding: '20px',
        borderRadius: '8px',
        margin: '15px 0',
        lineHeight: '1.6'
      }}
    >
      <h2 style={{ color: '#333', marginBottom: '10px' }}>My Favorite Cities</h2>
      <p style={{ fontSize: '16px', color: '#555' }}>
        I love to visit New York, Paris, and Tokyo.
      </p>
    </main>
  );
}

export default MainContent;
