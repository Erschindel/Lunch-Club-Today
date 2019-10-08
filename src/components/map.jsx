import React from "react";
import { withScriptjs, withGoogleMap, Marker, InfoWindow, GoogleMap } from "react-google-maps";
import Search from "./mapSearch";
import "../App.css";

const Maps = withScriptjs(withGoogleMap((props) =>{

  const home = {
    lat: 39.1887131,
    lng: -77.2627294
  }

  return(

      <GoogleMap
        defaultZoom={13}
        defaultCenter={home}
        className={"map-sizing"}
          >
        <Marker
          position={home}
        />


      </GoogleMap>

  )
}))

export default Maps;
