import React, { useContext } from 'react';
import Body from '../components/Body';
import { TaskContext } from '../Context/TaskContext'; // Ensure this path is correct

const HomePage = () => {
  const { tasks, addTask, deleteTask } = useContext(TaskContext);

  return <Body tasks={tasks} addTask={addTask} deleteTask={deleteTask} />;
};

export default HomePage;
