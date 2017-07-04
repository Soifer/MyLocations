import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router';
import {TableRow, TableRowColumn} from 'material-ui/Table';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const LocationListRow = ({location}) => {
    return (        
            <TableRow>
                <TableRowColumn>
                    <Link to={'/location/' + location.name}>{location.name}</Link>
                </TableRowColumn>
                <TableRowColumn>{location.address}</TableRowColumn>
                <TableRowColumn>{location.coordinates}</TableRowColumn>
                <TableRowColumn>{location.category}</TableRowColumn>
            </TableRow>      
    );
};

LocationListRow.propTypes = {
    location: PropTypes.object.isRequired
};

export default LocationListRow;