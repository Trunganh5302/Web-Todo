import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './Page/Home/HomePage';
import axios from 'axios'


function App() {
  // const [tasks, setTasks] = useState([]);

  // useEffect(() => {
  //   axios.get('http://localhost:8080/tasks')
  //     .then(response => {
  //       setTasks(response.data);
  //     })
  //     .catch(error => {
  //       console.error(error);
  //     });
  // }, []);

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage  />} />
      </Routes>
    </Router>
  );
}

export default App;
