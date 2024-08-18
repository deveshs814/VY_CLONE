import React from 'react';
import './Box.css'; 

const Box = ({ title, content }) => {
  return (
    <div className="box">
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
}

export default Box;
