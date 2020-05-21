import React from 'react';
import P from 'prop-types';
import './index.css';

const Task = ({ queryString = '', url = '', didClicked = false }) => {
  return (
    <div className="task">
      <span>{queryString} </span>
      <span>{url}</span>
      <span>{didClicked ? 'clicked' : 'in progress'}</span>
    </div>
  );
};

Task.propTypes = {
  queryString: P.string,
  url: P.string,
  didClicked: P.bool,
};

export default Task;
