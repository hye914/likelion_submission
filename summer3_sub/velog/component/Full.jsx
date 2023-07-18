import React from 'react';

function Full({ image, title, username, content }) {
  return (
    <div>
      <img src={image} alt="Card Image" />
      <h3>{title}</h3>
      <h3>{username}</h3>
      <p>{content}</p>
    </div>
  );
}

export default Full;


