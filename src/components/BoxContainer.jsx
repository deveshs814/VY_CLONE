import React from 'react';
import Box from './Box';
import './Box.css'; 

const BoxContainer = () => {
  return (
    <div className="box-container">
      <Box  content="500+ Opportunities" />
      <Box  content="100+ Travellers per Month" />
      <Box  content="20+ Indian States" />
    </div>
  );
}

export default BoxContainer;
