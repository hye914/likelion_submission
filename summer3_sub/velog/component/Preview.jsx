import React from 'react';

function Preview({ image, username, content, onClick }) {
  return (
    <div>
      <div onClick={onClick} style={{ border: '1px solid black', padding: '16px', margin: '16px' }}>
        <img src={image} alt="Card Image" />
        <h3>{username}</h3>
        <p>{content}</p>
      </div>
    </div>
  );
}

export default Preview;

