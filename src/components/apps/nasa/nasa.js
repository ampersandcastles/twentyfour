import React, { useState, useEffect } from "react";
import axios from "axios";
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

  // I don't get it and it isn't fun. Like how do people figure this shit out on their own?

  // fetch(url)
  //   .then((res) => res.json())
  //   .then((data) => {
  //     newUrl = data.url;
  //   });

  // useEffect(() => {
  //   axios(url).then((response) => {
  //     setData(response.data);
  //     console.log(setData);
  //   });
  // });

  return (
    <div className="main">
      <div className="mainDiv">
        <img alt="location" src={newUrl} />
      </div>
    </div>
  );
};

export default Nasa;
