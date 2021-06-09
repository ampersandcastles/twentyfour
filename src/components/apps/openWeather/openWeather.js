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
    const[ condition, setCondition] =useState("");
    const [lat, setLat] = useState(null);
    const [long, setLong] = useState(null);
    // const [status, setStatus] = useState(null);


function convertTemp() {
    if (temp===celcius) {

        setTemp(fahrenheit)
    } else {
        setTemp(celcius)  
    }
}
    function fetchweather() {
        navigator.geolocation.getCurrentPosition((position) => {
            setLat(position.coords.latitude);
            setLong(position.coords.longitude);
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=edfde44c1e3d9a379340235bda407164`)
        .then((response) => response.json())
        .then((json) => {

            console.log (json)
        }).catch(err => console.log(err))
    })
}
    useEffect(()=> {
        fetchweather();
    }, []);
    return (
        <div>
            <Card>
                <CardImg top width="100%" src="https://i.pinimg.com/originals/2b/9d/d5/2b9dd548d942db180979cf95e3d11ea1.jpg" alt="Card image cap" />
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