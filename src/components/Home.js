import React, { useState } from "react";
import DogsAdopted from "./DogsAdopted";

export default function Home({ dogList }) {
  const [dogPicked, setDogPicked] = useState();
  const [dogsAdopted, setDogsAdopted] = useState([]);
  //const [dogImage, setDogImage] = useState([]);

  function handleChange(event) {
    setDogPicked(event.target.value);
  }

  function handleSubmit(event) {
    alert(`your dog is: ${dogPicked}`);
    event.preventDefault();

    setDogsAdopted((prevState) => [...prevState, dogPicked]);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Choose a dog:
          <select value={dogPicked} onChange={handleChange}>
            {dogList.map((dog, index) => (
              <option key={index} value={dog}>
                {dog}
              </option>
            ))}
          </select>
        </label>
        <input type="submit" value="View" />
      </form>
      <DogsAdopted dogsAdopted={dogsAdopted} />
    </div>
  );
}
