import React, {Component} from 'react';
import PropTypes from 'prop-types';
import GoogleMapReact from 'google-map-react';
import MapView from './mapView';

const styles = {
    map: {
        height: "10px"
    }
}

class Map extends Component {

    onChange = (data) => {} //rerender maps
    onClick({x, y, lat, lng, event}) {
        this.props.handleClick;
        console.log("map onclick");
        // window.navigator.vibrate(300, 200);
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
            clickableIcons: false,
            clickableLabels: false,
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
        };
    }
    render() {
        return (
            <GoogleMapReact
                style={styles.map}
                options={this.createMapOptions}
                onChange={this.onChange}
                onClick={this.onClick}
                center={this.props.center}
                defaultZoom={this.props.zoom}>
                <MapView
                    lat={this.props.center.lat}
                    lng={this.props.center.lng}
                    text={this.props.name}/>
            </GoogleMapReact>
        );
    }
}

Map.propTypes = {
    center: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    key: PropTypes.string,
    zoom: PropTypes.number,
    handleClick:PropTypes.func.isRequired
}

Map.defaultProps = {
    key: "AIzaSyA7g5H_vr9_gImIeNp_9ObmGL143HERAf0",
    zoom: 10
};
export default Map;