import React from "react";
import Maps from "../components/map";

export default class MapWrapper extends React.Component {

	render() {


		return (
      <div>
  			<Maps
  				googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyCceXdLpZ5b6QkArMR73G59M9muGJgSQdg&v=3.exp&libraries=geometry,drawing,places`}
  				loadingElement={<div style={{ height: `100%` }} />}
  				containerElement={<div style={{ height: `50vh`, width: `60vw` }} />}
  				mapElement={<div style={{ height: `100%` }} />}
  			/>
        {console.log(this.props.submit)}
      </div>
		);
	}
}
