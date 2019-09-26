import React from "react";
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import Search from "./mapSearch.jsx";
import "../App.css";

class Maps extends React.Component{

  constructor(props){
    super(props);
  }

  fetchPlaces(mapProps, map){
    const {google} = mapProps;
    const service = new google.maps.places.PlacesService(map);
  }

  render(){
    //
    return(
      <div className="justify-content-center">
        < Search
          search={this.props.search}
          >
        </ Search >
        <Map
          google={this.props.google}
          zoom={13}
          initialCenter={{
            lat: 39.1887131,
            lng: -77.2627294
          }}
          onReady={this.fetchPlaces}
          className={"map-sizing"}
            >
          <Marker onClick={this.onMarkerClick}
              name={'Current location'} />
          <InfoWindow onClose={this.onInfoWindowClose}>
            </InfoWindow>
        </Map>
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyCceXdLpZ5b6QkArMR73G59M9muGJgSQdg")
})(Maps)
