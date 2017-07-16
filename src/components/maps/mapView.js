import React, {Component} from 'react';
import PropTypes from 'prop-types';
import FontIcon from 'material-ui/FontIcon';
import Chip from 'material-ui/Chip';

const MARKER_SIZE = 60;
const mapStyle = {   
    fontWeight: 900,
    position: 'absolute',
    width: MARKER_SIZE,
    height: MARKER_SIZE,
    left: -20,
    top: -60

};
const fontStyleChip = {
    color: "rgb(0, 151, 167)"
};
const fontStyleIcon = {
     color: 'rgb(189, 4, 4)'
};

const MapView = ({text}) => {
    return (
        <div style={mapStyle}>
            <Chip labelStyle={fontStyleChip} >
               {text}
            </Chip>
            
            <FontIcon className="material-icons" style={fontStyleIcon}>location_on</FontIcon>
        </div>
    );
}
MapView.propTypes = {
    text: PropTypes.string.isRequired
};
export default MapView;