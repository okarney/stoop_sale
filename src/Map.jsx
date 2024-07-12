"use client";

import {useState} from "react";
import {
    APIProvider,
    Map,
    Marker,
    AdvancedMarker,
    Pin,
    // InfoWindow,
} from "@vis.gl/react-google-maps";

export default function StoopMap() {
    const position = {lat: 40.679481, lng: -73.997257};

    console.log(process.env.GOOGLE_MAP_API_KEY)
    return (
        <APIProvider apiKey={process.env.GOOGLE_MAP_API_KEY}>
        <div style={{ marginTop: "5vh", marginBottom: "10vh", height: "50vh", width: "62vh"}}>
            <Map style={{ height: "100%", width: "100%" }} zoom={15} center={position} mapId="fbd2327118eafa58">
                <AdvancedMarker position={position}></AdvancedMarker>
            </Map>

        </div>
        </APIProvider>
    )
}





















// import React, { Component } from 'react';
// import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';


// class MapContainer extends Component {
//     render() {
//       return (
//         <Map
//           google={this.props.google}
//           zoom={18}
//           initialCenter={{
//             lat: 40.679481,
//             lng: -73.997257
//           }}
//         >
//           <Marker position={{
//             lat: 40.679481,
//             lng: -73.997257
//           }}>


//           </Marker>
       


//         </Map>


//       );
//     }
//   }
 
//   export default GoogleApiWrapper({
//     apiKey: "key"
//   })(MapContainer);