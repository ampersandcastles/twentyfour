import React, { useState, useEffect } from 'react';
import Weather from '../components/weather/Weather';

const Location = (props) => {

    const [latitude, setLatitude] = useState();
    const [longitude, setLongitude] = useState();

    function getLocation(){
        if(navigator.geolocation){

            console.log("Geolocation available");

            navigator.geolocation.getCurrentPosition(
                function(position){
                    console.log(`Lat=${position.coords.latitude}, Lon=${position.coords.longitude}`);

                    setLatitude(position.coords.latitude);
                    setLongitude(position.coords.longitude);
                },
                function errorPosition(error) {
                    console.log(error);
                },
                { timeout: 10000}
            )
        } else {
            console.log("Geolocation not available");
            return;
        }

    }

    useEffect(() => {
        getLocation()
    }, []);


    return (
        <>
        <h5> {`Latitude = ${latitude}  ,   Longitude = ${longitude}`} </h5>
        <br />
        
        </>
    );
}

export default Location;