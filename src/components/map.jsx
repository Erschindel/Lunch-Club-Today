import React from "react";
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

class Maps extends React.Component{

  constructor(props){
    super(props);
  }

  render(){
    //
    return(
      <div>
          <Map google={this.props.google} zoom={11}>
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
