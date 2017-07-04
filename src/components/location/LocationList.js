import React from 'react';
import PropTypes from 'prop-types';
import LocationListRow from './LocationListRow';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';
import {Link} from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const LocationList = ({locations}) => {
    return (
        <MuiThemeProvider>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHeaderColumn>Name</TableHeaderColumn>
                        <TableHeaderColumn>Address</TableHeaderColumn>
                        <TableHeaderColumn>Coordinates</TableHeaderColumn>
                        <TableHeaderColumn>Category</TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {locations.map(location => 
                    <TableRow>
                        <TableRowColumn>
                            <Link to={'/location/' + location.name}>{location.name}</Link>
                        </TableRowColumn>
                        <TableRowColumn>{location.address}</TableRowColumn>
                        <TableRowColumn>{location.coordinates}</TableRowColumn>
                        <TableRowColumn>{location.category}</TableRowColumn>
                    </TableRow>
                    )}
                </TableBody>
            </Table>
        </MuiThemeProvider>
    );
};

LocationList.propTypes = {
    locations: PropTypes.array.isRequired
};

export default LocationList;