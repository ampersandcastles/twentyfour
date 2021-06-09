import React, { useState, useEffect } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import {geolocated} from "react-geolocated";
// import Location from "./location";

const WeatherParent = (props) => {
    const [weather, setWeather] = useState([]);
    const [temp, setTemp] = useState("");
    const [fahrenheit, setFahrenheit] = useState("");
    const [celcius, setCelcius] = useState("");
    const[ condition, setCondition] =useState("");
    const [lat, setLat] = useState(null);
    // const [long, setLong] = useState(null);
    // const [status, setStatus] = useState(null);

useEffect(() => {
    fetchweather()
}, []);

// const getLocation = () => {
//         if(!navigator.geolocation) {
//             setStatus('Geolocation is not supported by your browser');
//         } else {
//             setStatus('Locating...');
//             navigator.geolocation.getCurrentPosition((position) => {
//                 setLat(position.coords.latitude);
//                 setLong(position.coords.longitude);
//                 fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${props.latitude}&lon=${props.longitude}&appid=edfde44c1e3d9a379340235bda407164`)
//                 .then(function(result){
//                     console.log(result);
//                     return result.json();
//                 })
//                 .then(function(json) {
//                     console.log(json);
                    

//                 })
//             })
            
//         }
//     }

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
            // setTemp(json.main.temp-273.15)
            // setCelcius(json.main.temp-273.15)
            // setFahrenheit((json.main.temp-273.15)*9/5+32)
            // setCondition(json.weather[0].description)
        });
    }
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

// const Hooks = () => {
//     const [query, setQuery] = useState("");
//     const [results, setResults] = useState({});

//     const fetcher = () => {
//         fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${props.latitude}&lon=${props.longitude}&appid=edfde44c1e3d9a379340235bda407164`)
//         .then((res) => res.json())
//         .then((json) => {
//             console.log(json);
//             setResults(json);
//         });
//     };

//     return (
//         <div className="main">
//             <div className="mainDiv">
//                 <input
//                     value={query}
//                     onChange={(e) => setQuery(e.target.value)}
//                     placeholder="enter your sw character number"
//                 />
//                 <button onClick={() => fetcher()}>Click for Character!</button>
//                 {results ? <h2>{results.name}</h2> : <div></div>}
//             </div>
//         </div>
//     );
// };

export default WeatherParent;