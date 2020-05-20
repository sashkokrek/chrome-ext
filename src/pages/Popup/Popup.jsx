import React, { useState, useEffect } from 'react';
import CheckClickForm from '../../components/CheckClickForm';
import Task from '../../components/Task';
import chromeAPI from '../../api/chromeAPI';
import './Popup.css';

const Popup = () => {
  // Define validation rules
  const [validationRules, setValidationRules] = useState({
    didGoogleVisited: false,
    didSearchResultVisited: false,
    didClicked: false,
  });
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    chromeAPI.storage.getAllTasks((res) => {
      res.tasks ? setTasks(res.tasks) : setTasks([]);
      setLoading(false);
    });
    return () => {};
  }, []);

  const addTask = (queryString, url) => {
    const newTask = { queryString, url, didClicked: false };

    chromeAPI.storage.setTasks([...tasks, newTask], () => setTasks([...tasks, newTask]));
  };

  return (
    <div>
      <h1>This is the Popup Window</h1>
      <div>
        {!loading &&
          tasks.map((task, index) => (
            <Task key={task.queryString + index} queryString={task.queryString} url={task.url} />
          ))}
        <CheckClickForm onSubmit={addTask} />
      </div>
    </div>
  );
};
export default Popup;


