import React, { useState } from 'react';
import P from 'prop-types';
import './index.css';

const CheckClickForm = ({ onSubmit = () => {} }) => {
  const [inputs, setInputs] = useState({
    searchQuery: '',
    url: '',
  });

  function onChange(event) {
    const { name, value } = event.target;

    setInputs({ ...inputs, [name]: value });
  }

  function submitForm() {
    onSubmit(inputs.searchQuery, inputs.url);
  }

  return (
    <div className="checkClickForm">
      <form action="">
        <input
          type="text"
          name="searchQuery"
          onChange={onChange}
          value={inputs.searchQuery}
          placeholder="Search query"
        />
        <input type="text" name="url" onChange={onChange} value={inputs.url} placeholder="Url" />
        <button type="button" onClick={submitForm}>
          Add
        </button>
      </form>
    </div>
  );
};

CheckClickForm.propTypes = {
  onSubmit: P.func.isRequired,
};

export default CheckClickForm;
