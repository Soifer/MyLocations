import React, {Component} from 'react';
import PropTypes from 'prop-types';
import GoogleMapReact from 'google-map-react';
import MapView from './mapView';

class Map extends Component {
    constructor(props) {
        super(props);

    }

    createMapOptions = (maps) => {
        return {
            panControl: false,
            navigationControl: false,
            mapTypeControl: false,
            scrollwheel: false,
            draggable: false,
            zoomControl: false,
            disableDoubleClickZoom: true,
            fullscreenControl: false,
            styles: [
                {
                    stylers: [
                        {
                            'saturation': -100
                        }, {
                            'gamma': 0.8
                        }, {
                            'lightness': 2
                        }, {
                            'visibility': 'on'
                        }
                    ]
                }
            ]
        }
    }
    render() {
        return (
            <GoogleMapReact
                options={this.createMapOptions}
                defaultCenter={this.props.center}
                defaultZoom={this.props.zoom}>
                <MapView lat={this.props.center.lat} lng={this.props.center.lng} text={this.props.name}/>
            </GoogleMapReact>
        );
    }
}

Map.propTypes = {
    center: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    key: PropTypes.string,
    zoom: PropTypes.number
}

Map.defaultProps = {
    center: {
     lat: 59.95, lng: 30.33
    },
    key: "AIzaSyA7g5H_vr9_gImIeNp_9ObmGL143HERAf0",
    zoom: 10
};
export default Map;