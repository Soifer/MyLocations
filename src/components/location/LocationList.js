import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import FontIcon from 'material-ui/FontIcon';
import {Link} from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import LocaitonDialog from './LocationDialog';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
// import Map from '../maps/map';
import LocationTabs from './LocationsTabs';

const styles = {
  gridList: {
    minHeight: 450,
    backgroundSize: "contain",
    margin: "56px 0 56px 0"
  },
  gridTile: {
    width: "100%",
    color: "rgb(68, 0, 22)",
    fontWeight: 800,
    fontSize: 13
  }
};

class LocationList extends Component {
  render() {
    
    return (
      <div>
       <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
          <LocaitonDialog />
        </MuiThemeProvider>
        <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
          <GridList
            cols={2}
            rows={2}
            padding={1}
            cellHeight={180}
            style={styles.gridList}>
            {this.props.locations.map((location, index) => (
                <GridTile
                  titleBackground="linear-gradient(rgba(0, 151, 167, 0.7) 0%, rgba(0, 151, 167, 0.5) 70%, rgba(0, 0, 0, 0.2) 100%)"
                  key={index}
                   //actionIcon={< LocaitonDialog location = {location} />} 
                  rows={1}
                  cols={index % 5 == 0 ? 2 : 1}>
                    <LocationTabs  location={location}/>  
                </GridTile>
              ))}
          </GridList>
        </MuiThemeProvider>
      </div>
    );
  }
}

LocationList.propTypes = {
    locations: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  let groupedLocations = [];
  if (state.groupby !== '') {
    groupedLocations = state
      .locations
      .filter((location) => {
        if (location.categories.includes(state.groupby)) 
          return location;
        }
      );
  } else {
    groupedLocations = state.locations;
  }

  return {locations: groupedLocations, groupby: state.groupby};
}


export default connect(mapStateToProps)(LocationList);