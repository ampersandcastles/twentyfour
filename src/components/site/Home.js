import React from "react";
import { geolocated } from "react-geolocated";

<<<<<<< HEAD
// const Home = () => {
//   return (
//     <div className="main">
//       <div className="mainDiv"></div>
//     </div>
//   );
// };

class Home extends React.Component {
  render() {
    return !this.props.isGeolocationAvailable ? (
      <div>Your browser does not support Geolocation or Geocities</div>
    ) : !this.props.isGeolocationEnabled ? (
      <div>Geolocation is not enabled</div>
    ) : this.props.coords ? (
      <div className="main">
        <div className="mainDiv">
          <table>
            <tbody>
              <tr>
                <td>Your latitude: </td>
                <td value={this.props.coords.latitude}>
                  {this.props.coords.latitude}
                </td>
              </tr>
              <tr>
                <td>Your longitude: </td>
                <td value={this.props.coords.longitude}>
                  {this.props.coords.longitude}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
=======
const Home = () => {
  return (
    <div className="main">
      <div className="mainDiv">
        <h1>Welcome to Team E's 24 hour project.</h1>
        <p>This app is going to be the death of us.</p>
        
        <hr />
>>>>>>> origin/chelsey
      </div>
    ) : (
      <div>Getting the location &hellip;</div>
    );
  }
}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 5000,
})(Home);
