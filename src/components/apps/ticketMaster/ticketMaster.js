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