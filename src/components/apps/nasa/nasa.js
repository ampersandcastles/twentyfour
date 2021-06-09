import React, { useState, useEffect } from "react";
// import axios from "axios";
// import Home from "../../site/Home";

const key = "mn2af7JtZtjoqhsrZcpppHIyTgkXtfG6L83tcMp8";
const baseURL = "https://api.nasa.gov/planetary/earth/assets";

const Nasa = (lat, lon) => {
  // const [data, setData] = useState("");
  const [newUrl, setNewUrl] = useState("");
  lon = "-85.78";
  lat = "40.22";
  let url = `${baseURL}?lon=${lon}&lat=${lat}&api_key=${key}`;
  // console.log(url);
  // let newUrl;

  // useEffect(() => {
  //   axios(url).then((response) => {
  //     setData(response.data);
  //     console.log(setData);
  //   });
  // });

  useEffect(() => {
    const FetchImage = async () => {
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setNewUrl(data.url);
          console.log(newUrl);
        });
    };
    FetchImage();
  }, []);

  // This works but I have no idea why

  console.log(newUrl);

  return (
    <div className="main">
      <div className="mainDiv">
        <img alt="location" src={newUrl} height="250" width="250" />
      </div>
    </div>
  );
};

export default Nasa;
