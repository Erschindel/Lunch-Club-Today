import React from "react";
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import "../App.css";

class Maps extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      input: "",
      submit: ""
    }
  }

  handleChange = (event) => {
    this.setState({
      input: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      submit: this.state.input
    })
  };

  render(){
    //
    return(
      <div className="justify-content-center">
          <form onSubmit={this.handleSubmit} className="form-styles">
            <div class="input-group mb-3">
              <input type="text" class="form-control" onChange={this.handleChange} value={this.state.value} placeholder="Enter location (i.e Chipotle, &pizza, etc.)"/>
              <div class="input-group-append">
                <button type="button" class="btn btn-outline-secondary">Find</button>
              </div>
            </div>
          </form>
          <h1>{this.state.submit}</h1>
          <div>
            <Map
              google={this.props.google}
              zoom={13}
              initialCenter={{
                lat: 39.1887131,
                lng: -77.2627294
              }}
              className={"map-sizing"}

              >
              <Marker onClick={this.onMarkerClick}
                  name={'Current location'} />
              <InfoWindow onClose={this.onInfoWindowClose}>

              </InfoWindow>
            </Map>
          </div>
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyCceXdLpZ5b6QkArMR73G59M9muGJgSQdg")
})(Maps)

Maps.defaultProps = {
  zoom: 14,
  initialCenter: {
    lat: -1.2884,
    lng: 36.8233
  },
  centerAroundCurrentLocation: false,
  visible: true
};
