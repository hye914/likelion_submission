import React from 'react';

function Full({ image, username, content }) {
  return (
    <div>
      <img src={image} alt="Card Image" />
      <h3>{username}</h3>
      <p>{content}</p>
    </div>
  );
}

export default Full;


