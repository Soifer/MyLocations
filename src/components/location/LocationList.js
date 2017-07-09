import React from 'react';
import PropTypes from 'prop-types';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import {Link} from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';

const styles = {
  gridList: {
    height: 450,
    backgroundSize: "contain",
    margin:0
  },
  gridTile : {  
    width: "100%"
}
};

const LocationList = ({locations}) => {
    return (
  <div>
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
    <GridList
          cols={2}
          rows={2}
          padding={2}
          cellHeight={180}
          style={styles.gridList}
          >
      {locations.map((location, index) => (
        <GridTile
          titleBackground="linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
          key={index}
          title={location.name}
          subtitle={<span>{location.address}</span>}
          actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
          style={styles.gridTile}
          rows={index%5 == 0 ? 2 : 1}
          cols={index%5 == 0 ? 2 : 1}
        >
          <img  src="src/tools/images/map.jpg" />
        </GridTile>
      ))}
    </GridList>
    </MuiThemeProvider>
  </div>
    );
};


LocationList.propTypes = {
    locations: PropTypes.array.isRequired
};

export default LocationList;