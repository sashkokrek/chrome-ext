import React, { useState } from 'react';

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
    <form action="">
      <input
        type="text"
        name="searchQuery"
        onChange={onChange}
        value={inputs.searchQuery}
        placeholder="Search query"
      />
      <input type="text" name="url" onChange={onChange} value={inputs.url} placeholder="Url" />
      <button type="button" onClick={submitForm}>Add</button>
    </form>
  );
};

export default CheckClickForm;



