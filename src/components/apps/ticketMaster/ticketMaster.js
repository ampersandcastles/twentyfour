import React, {useState} from 'react';
import {render} from 'react-dom';
import {geolocated} from "react-geolocated";



const NearestEvents =() => {
    const [lat, setLat] = useState(null);
    const [long, setLong] = useState(null);
    const [status, setStatus] = useState(null);

    const getLocation = () => {
        if(!navigator.geolocation) {
            setStatus('Geolocation is not supported by your browser');
        } else {
            setStatus('Locating...');
            navigator.geolocation.getCurrentPosition((position) => {
                setLat(position.coords.latitude);
                setLong(position.coords.longitude);
                fetch(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=Gph5eT3UoUhietGGAxGHBYNpaG4nhv6n&latlong=${position.coords.latitude},${position.coords.longitude}`, {
                method: 'GET',
                headers: new Headers({
                    'Content-Type': 'application/json'
                })
            })
            }, () => {
                setStatus('Unable to retrieve your location');
            });
        }
    }
return(
    <div className ="App">
        <button onClick={getLocation}>Get Location</button>
        <h1>Coordinates</h1>
        <p>{status}</p>
        {lat && <p>Latitude: {lat}</p>}
        {long && <p>Latitude: {long}</p>}
    </div>
        
    )

}

export default NearestEvents;

