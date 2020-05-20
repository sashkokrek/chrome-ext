import React from 'react';

const Task = ({ queryString, url }) => {
  return (
    <div>
      <span>{queryString} </span>
      <span>{url}</span>
    </div>
  );
};

export default Task;

