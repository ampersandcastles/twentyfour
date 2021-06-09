<<<<<<< HEAD
import React, {useState, useEffect} from 'react';

const NearestEvents =() => {
    const [lat, setLat] = useState(null);
    const [long, setLong] = useState(null);
    const [status, setStatus] = useState(null);
    const [data, setData]= useState([]);

    const getLocation =() => {
        setStatus('Locating...');
            navigator.geolocation.getCurrentPosition((position) => {
                setLat(position.coords.latitude);
                setLong(position.coords.longitude);
                fetch(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=Gph5eT3UoUhietGGAxGHBYNpaG4nhv6n&latlong=${position.coords.latitude},${position.coords.longitude}`) 
                .then((res) => res.json())
                .then((eventData) => {
                    console.log(eventData._embedded.events);
                    setData(eventData);
                    // return data.map((eventData) => <li>{eventData._embedded.event}</li>);
                }).catch(err => console.log(err))
            })
         
        }
    
    useEffect(()=> {
            getLocation();
        }, []);

return(
   <div className ="App">
        <h1>Events near you:</h1>
        {lat && <p>Your Latitude: {lat}</p>}
        {long && <p>Your Longitude: {long}</p>}

        <pre>{JSON.stringify(data,null,2)}</pre>
    
  {/* <button onClick={getLocation}>Get Location</button>  */}

        </div>
    )


}

export default NearestEvents;



// function FetchApi() {
//     const [data, setData] = useState([]);
    
//     const apiGet = () =>{
//         fetch(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=Gph5eT3UoUhietGGAxGHBYNpaG4nhv6n`)
//         .then((response) => response.json())
//         .then((json) => {
//             console.log(json);
//             setData(json);
//         });
//     };

//     useEffect(()=> {
//         apiGet();
//     }, []);

//     return (
//         <div>
//             Events: <br/>
//             <button onClick={apiGet}>Fetch Events</button> 
//             <br />
//             {/* <pre>{JSON.stringify(data,null,2)}</pre> */}
//             <div>
//                 <ul>
//                     {data.map((item) => (
//                     <li>{item._embedded.events.name}</li>
//                     ))}
//                 </ul>
//                 </div>
//             </div>
//     )

    
// }
=======
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
>>>>>>> c04f8cf3eee1b060f20cc1d503e775192ff7d0e2
