import React, { useState, useEffect } from 'react';
import CheckClickForm from '../../components/CheckClickForm';
import Task from '../../components/Task';
import chromeAPI from '../../api/chromeAPI';

const Popup = () => {
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

  const clearTasks = () => {
    chromeAPI.storage.setTasks([], () => setTasks([]));
  };

  return (
    <div>
      <h1>Create tasks for click. The register of letters is ignoring</h1>
      <div>
        {!loading &&
          tasks.map((task, index) => (
            <Task
              key={task.queryString + index}
              queryString={task.queryString}
              url={task.url}
              didClicked={task.didClicked}
            />
          ))}
        <CheckClickForm onSubmit={addTask} />
        <button onClick={clearTasks}>Delete all</button>
      </div>
    </div>
  );
};
export default Popup;

