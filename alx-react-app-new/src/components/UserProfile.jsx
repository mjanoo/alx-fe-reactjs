import React from "react";

const UserProfile = (props) => {
  return (
    <div
      style={{
        border: '1px solid gray',
        padding: '15px',
        margin: '15px 0',
        borderRadius: '8px',
        maxWidth: '300px',
        backgroundColor: '#f9f9f9'
      }}
    >
      <h2 style={{ color: 'blue', fontSize: '24px', marginBottom: '10px' }}>
        {props.name}
      </h2>
      <p>
        Age: <span style={{ fontWeight: 'bold', color: 'darkgreen' }}>{props.age}</span>
      </p>
      <p>
        Bio: <span style={{ fontStyle: 'italic' }}>{props.bio}</span>
      </p>
    </div>
  );
};

export default UserProfile;
