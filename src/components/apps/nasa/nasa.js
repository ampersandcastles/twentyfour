import React, { useState, useEffect } from "react";
// import Home from "../../site/Home";

const key = "mn2af7JtZtjoqhsrZcpppHIyTgkXtfG6L83tcMp8";
const baseURL = "https://api.nasa.gov/planetary/earth/assets";

const Nasa = (lat, lon) => {
  const [data, setData] = useState("");
  lon = "-85.78";
  lat = "40.22";
  let url = `${baseURL}?lon=${lon}&lat=${lat}&api_key=${key}`;
  // console.log(url);
  let newUrl;

  // fetch(url)
  //   .then((res) => res.json())
  //   .then((data) => {
  //     newUrl = data.url;
  //   });

  const fetchImage = () => {
    fetch(url, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (newUrl) {
        console.log(newUrl);
        setData(newUrl);
      });
  };

  return (
    <div className="main">
      <div className="mainDiv">
        <img alt="location" src={newUrl} />
      </div>
    </div>
  );
};

export default Nasa;
