import React, { useState } from 'react';
import CheckClickForm from '../../components/CheckClickForm';
import './Popup.css';

const Popup = () => {
  // Define validation rules
  const [validationRules, setValidationRules] = useState({
    didGoogleVisited: false,
    didSearchResultVisited: false,
    didClicked: false,
  });

  const addTask = (queryString, url) => {
    console.log(queryString, url);
  };


  return (
    <div>
      <h1>This is the Popup Window</h1>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <CheckClickForm onSubmit={addTask} />
      </div>
    </div>
  );
};
export default Popup;










