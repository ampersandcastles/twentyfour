import React from "react";

const key = "mn2af7JtZtjoqhsrZcpppHIyTgkXtfG6L83tcMp8";
const baseURL = "https://api.nasa.gov/planetary/earth/imagery";

const Nasa = (lat, lon) => {
  let url = `${baseURL}?api_key=${key}`;
  console.log(url);

  return (
    <div className="main">
      <div className="mainDiv">
        <p>hello</p>
      </div>
    </div>
  );
};

export default Nasa;
