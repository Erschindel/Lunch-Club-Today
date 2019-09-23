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
      <div>
          <form onSubmit={this.handleSubmit}>
            <input type="text" onChange={this.handleChange} value={this.state.value} placeholder="Enter location (i.e \'Chipotle\', \'&pizza\', etc.)"/>
            <button type="submit">Find</button>
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
