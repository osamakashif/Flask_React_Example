// Importing modules
import React, { useState, useEffect } from "react";
import './App.css';

function getDay(num) {
  if (num === 0) {
    return "Monday"
  } else if (num === 1) {
    return "Tuesday"
  } else if (num === 2) {
    return "Wednesday"
  } else if (num === 3) {
    return "Thursday"
  } else if (num === 4) {
    return "Friday"
  } else if (num === 5) {
    return "Saturday"
  } else if (num === 6) {
    return "Sunday"
  } else {
    return ""
  }
}

function App() {// usestate for setting a javascript
  // object for storing and using data
  const [data, setData] = useState({
    day: "",
    month: "",
    date: "",
    year: "",
  });

  // Using useEffect for single rendering
  useEffect(() => {
    // Using fetch to fetch the api from 
    // flask server it will be redirected to proxy
    fetch("/date").then((res) =>
      res.json().then((data) => {
        // Setting a data from api
        setData({
          day: data.Day,
          month: data.Month,
          date: data.Date,
          year: data.Year,
        });
      })
    );
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>React and flask</h1>
        {/* Calling a data from setdata for showing */}
        <p>Day: {getDay(data.day)}</p>
        <p>Date: {data.date}/{data.month}/{data.year}</p>
      </header>
    </div>
  );
}

export default App;
