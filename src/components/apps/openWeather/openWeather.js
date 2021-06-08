import React, { useState, useEffect } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';

const WeatherParent = (props) => {
  const [weather, setWeather] = useState([]);
  const [temp, setTemp] = useState("");
  const [fahrenheit, setFahrenheit] = useState("");
  const [celcius, setCelcius] = useState("");
  const[ condition,setCondition] =useState("");
useEffect(() => {
    fetchweather()
}, []);
function convertTemp() {
    if (temp===celcius) {
       
        setTemp(fahrenheit)
    } else {
      setTemp(celcius)  
    }
}
  function fetchweather() {
    const url =
      `https://api.openweathermap.org/data/2.5/weather?lat=${props.latitude}&lon=${props.longitude}&appid=edfde44c1e3d9a379340235bda407164`;
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
          console.log (json)
          setTemp(json.main.temp-273.15)
          setCelcius(json.main.temp-273.15)
          setFahrenheit((json.main.temp-273.15)*9/5+32)
          setCondition(json.weather[0].description)
      });
  }
  return (
    <div>
      <Card>
        <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">Your Current Weather Conditions</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Current Condition {condition}</CardSubtitle>
          <CardText>Current Temperature {temp}</CardText>
          <Button onClick = {convertTemp}>Click to Convert Temperature</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default WeatherParent;