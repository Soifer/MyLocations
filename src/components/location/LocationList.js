import React from 'react';
import PropTypes from 'prop-types';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import FontIcon from 'material-ui/FontIcon';
import {Link} from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import Map from '../maps/map';

const styles = {
  gridList: {
    minHeight: 450,
    backgroundSize: "contain",
    margin:"56px 0 56px 0"
  },
  gridTile : {      
    width: "100%",
    color:"rgb(68, 0, 22)",
    fontWeight: 800,
    fontSize: 13
}
};

const LocationList = ({locations, groupby}) => {
  let groupedLocations = [];
  if (groupby!=='') {
    groupedLocations = locations.filter((location)=>{
      if(location.categories.includes(groupby))
        return location;
    });
  }
  else{
    groupedLocations = locations;
  }

  const onClick = (event) =>{
    console.log("click");
    window.navigator.vibrate(200);
 };

  return (
  <div>
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>      
       <GridList         
          cols={2}
          rows={2}
          padding={2}
          cellHeight={180}
          style={styles.gridList}>
       {groupedLocations.map((location, index) => (
        <GridTile
          onClick={onClick}
          titleBackground="linear-gradient(rgba(0, 151, 167, 0.7) 0%, rgba(0, 151, 167, 0.5) 70%, rgba(0, 0, 0, 0.2) 100%)"
          key={index}
          title={location.name}
          subtitle={<span>{location.address}</span>}
          actionIcon={<IconButton><FontIcon className="material-icons" color="rgb(68, 0, 22)">explore</FontIcon></IconButton>}
          titleStyle={styles.gridTile}
          subtitleStyle={styles.gridTile}
          rows={index%5 == 0 ? 2 : 1}
          cols={index%5 == 0 ? 2 : 1}>
          {/* <img  src="src/tools/images/map.jpg" /> */}
          <Map center={location.coordinate} name={location.name}/>
        </GridTile>
        ))} 
     </GridList>
    </MuiThemeProvider> 
  </div>
    );
};


LocationList.propTypes = {
    locations: PropTypes.array.isRequired,
    groupby: PropTypes.string.isRequired
};

export default LocationList;