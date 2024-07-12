import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

class MapContainer extends Component {
    render() {
      return (
        <Map
          google={this.props.google}
          zoom={18}
          initialCenter={{
            lat: 40.679481,
            lng: -73.997257
          }}
        >
          <Marker position={{
            lat: 40.679481,
            lng: -73.997257
          }}>

          </Marker>
        

        </Map>

      );
    }
  }
  
  export default GoogleApiWrapper({
    apiKey: "AIzaSyDB6_I5Wqiwb2TJ2TJh8sPVOYAEU_5moBY"
  })(MapContainer);


// import React from "react";
// import {GoogleMap, withScriptjs, withGoogleMap} from "react-google-maps";


// function BasicMap() {
//     return (
//         <GoogleMap 
//         defaultZoom={10} 
//         defaultCenter={{lat: 40.679481, lng: -73.997257}}
//         />

//     );
// }

// const WrappedMap = withScriptjs(withGoogleMap(BasicMap));

// export default function Map() {
//     const googleMapsApiKey = "AIzaSyDB6_I5Wqiwb2TJ2TJh8sPVOYAEU_5moBY";

//     console.log(googleMapsApiKey);
//     return (
//     <div style={{ width: "100vw", height: "100vh" }}>
//         <WrappedMap 
//         googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${googleMapsApiKey}&v=3.exp&libraries=geometry,drawing,places`}
//         loadingElement={<div style = {{height: "100%"}} />}
//         containerElement={<div style = {{height: "100%"}} />}
//         mapElement={<div style = {{height: "100%"}} />}

//         />
//     </div>
//     );
// }