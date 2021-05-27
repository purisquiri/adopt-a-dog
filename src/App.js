import React, { useState, useEffect } from "react";
import Home from "./components/Home";
import axios from "axios";
import "./App.css";

function App() {
  const [dogList, setDogList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get("https://dog.ceo/api/breeds/list/all")
      .then(function (response) {
        setDogList(Object.keys(response.data.message));
      })
      .catch(function (err) {
        console.log(err);
      });
  };

  return (
    <div className="App">
      <Home dogList={dogList} />
    </div>
  );
}

export default App;
