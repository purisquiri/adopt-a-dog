import React, { useState, useEffect } from "react";
import axios from "axios";

export default function DogsAdopted({ dogsAdopted }) {
  const [imageUrl, setImageUrl] = useState([]);

  useEffect(() => {
    fetchImage();
  }, [dogsAdopted]);
  const fetchImage = () => {
    axios
      .get("https://dog.ceo/api/breeds/image/random")
      .then(function (response) {
        setImageUrl((prevState) => [...prevState, response.data.message]);
      })

      .catch((err) => {
        console.error(err);
      });
  };

  const lastImage = imageUrl[imageUrl.lenght - 1];

  console.log(imageUrl[imageUrl.length - 1]);
  const displayDogs = dogsAdopted?.map((dog, i) => (
    <div key={i}>
      <h3>breed: {dog}</h3>
      <h3>{lastImage}</h3>
      <img src="{lastImage}" alt="dog" />
      <button>adopt</button>
    </div>
  ));

  console.log(imageUrl);

  return <div>{displayDogs}</div>;
}
