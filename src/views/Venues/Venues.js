import React, { Component } from "react"
import { compose } from "recompose"
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";

import data from './data'

const MapWithAMarker = compose(withScriptjs, withGoogleMap)(props => {

  return (
    <GoogleMap defaultZoom={4} defaultCenter={{ lat: -13.122402, lng: 56.617059 }}>
      {props.venues.map(venue => {
        const onClick = props.onClick.bind(this, venue)
        return (
          <Marker
            key={venue.id}
            onClick={onClick}
            position={{ lat: venue.latitude, lng: venue.longitude }}
            name={venue.id}
          >
            {props.selectedMarker === venue &&
              <InfoWindow>
                <div>
                  {venue.stadium},&nbsp;
                  {venue.city},&nbsp; 
                  {venue.country}
                </div>
              </InfoWindow>}
            }
          </Marker>
        )
      })}
    </GoogleMap>
  )
})

export default class ShelterMap extends Component {
  state = {
    selectedMarker: true,
  }

  handleClick = (marker, event) => {
    this.setState({ selectedMarker: marker })
  }
  render() {
    
    return (
      <MapWithAMarker
        selectedMarker={this.state.selectedMarker}
        venues={data}
        onClick={this.handleClick}
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: "100%" }}/>}
        containerElement={<div style={{ height: "1200px" }} />}
        mapElement={<div style={{ height: "100%" }} />}
        // loadingElement={<div style={{ height: `100%` }} />}
				// containerElement={<div style={{ height: `100%`, width: `100%` }} />}
				// mapElement={<div style={{ height: `100%` }} />}
      />
    )
  }
}