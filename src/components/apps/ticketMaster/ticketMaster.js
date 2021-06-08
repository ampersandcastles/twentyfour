import React, {useState} from 'react';
import {geolocated} from "react-geolocated";


const NearestEvents = () => {
    // const [lattitude, setLattitude] = useState(this.props.coords.latitude);
    // const [longitude, setLongitude] = useState(this.props.coords.longitude);
    //  latlong=this.props.coords.latitude + "," + this.props.coords.longitude
   const url= `https://app.ticketmaster.com/discovery/v2/events.json?apikey=Gph5eT3UoUhietGGAxGHBYNpaG4nhv6n&latlong=${lattitude},${longitude}`

//    fetch(url , {
//    }


// class Demo extends React.Component {
    render() {
        return !this.props.isGeolocationAvailable ? (
            <div>Your browser does not support Geolocation</div>
        ) : !this.props.isGeolocationEnabled ? (
            <div>Geolocation is not enabled</div>
        ) : this.props.coords ? (
            fetch(url, {
                method: 'GET',
                body: JSON.stringify,
                headers: new Headers({
                    'Content-Type': 'application/json'
                })
            })
            .then((res) => )
            // <table>
            //     <tbody>
            //         <tr>
            //             <td>latitude</td>
            //             <td>{this.props.coords.latitude}</td>
            //         </tr>
            //         <tr>
            //             <td>longitude</td>
            //             <td>{this.props.coords.longitude}</td>
            //         </tr>
            //     </tbody>
            // </table>
        ) 
    }
}

export default geolocated({
    positionOptions: {
        enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
})(NearestEvents);

// const NearestEvents = () => {
//     const [lattitude, setLattitude] = useState('');
//     const [longitude, setLogitude]= useState('');
//     const ticketUrl = 'https://app.ticketmaster.com/discovery/v2/events.json';
//     const ticketKey = 'Gph5eT3UoUhietGGAxGHBYNpaG4nhv6n';

//     const findEvent = () =>{
//         fetch(`${ticketUrl}?apikey=${ticketKey}`, {
//         method: 'GET',
//         body: JSON.stringify({lattitude:lattitude, longitude:longitude}),
//         headers: new Headers({
//             'Content-Type': 'application/json'
//         })
//     })
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(err => console.log(err))

//     }   
//     return (
//         <div>
//             <h1>Ticketmaster Events</h1>
//             <p>Events near you:</p>
//             <p onLoad={findEvent}></p>
//         </div>
//     )
    

// }

// export default NearestEvents;

// const ticketUrl = 'https://app.ticketmaster.com/discovery/v2/events';
// const ticketKey = 'Gph5eT3UoUhietGGAxGHBYNpaG4nhv6n';


// let eventUrl;

// eventUrl = `${ticketUrl}&apikey=${ticketKey}`;

// fetch (eventUrl)
// .then(function(result){
//     console.log(result);
//     return result.json();
// })
// .then(function (json) {
//     console.log(json);
