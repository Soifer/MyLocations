import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GoogleMapReact from 'google-map-react';
import MapView from './mapView';

class Map extends Component {
  static defaultProps = {
    center: {lat: 59.95, lng: 30.33},
    key:"AIzaSyA7g5H_vr9_gImIeNp_9ObmGL143HERAf0",
    zoom: 10
  };
 createMapOptions = (maps)=> {
    return {
      panControl: false,
      navigationControl: false,
      mapTypeControl: false,
      scrollwheel: false,
      draggable: false,
      zoomControl: false,
      disableDoubleClickZoom: true,
      fullscreenControl: false,
      styles: [{ stylers: [{ 'saturation': -100 }, { 'gamma': 0.8 }, { 'lightness': 4 }, { 'visibility': 'on' }] }]
    }
  }
  render() {
    return (
      <GoogleMapReact
         options={this.createMapOptions}
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
      >
        <MapView
          lat={59.955413}
          lng={30.337844}
          text={'Kreyser Avrora'}
        />
      </GoogleMapReact>
    );
  }
}
export default Map;