import React from 'react';
import PropTypes from 'prop-types';
import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import Map from '../maps/map';

const styles = {
  tabsStyle: {
    background: "linear-gradient(rgba(0, 151, 167, 0.7) 0%, rgba(0, 151, 167, 0.5) 70%, rgba(0, 0" +
        ", 0, 0.2) 100%)",
    color: "rgb(68, 0, 22)"
  },
  slide: {
    textAlign: "center",
    color: "rgb(68, 0, 22)",
    height: "132px",
    background: "linear-gradient(rgba(0, 151, 167, 0.4) 0%, rgba(0, 151, 167, 0.2) 70%, rgba(0, 0" +
        ", 0, 0.2) 100%)",
  },
  inkBarStyle: {
    background: 'rgb(68, 0, 22)'
  },
  map:{

  }
};

class LocationTabs extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0
    };
  }
  

  handleChange = (value) => {
    console.log("handleChange");
    this.setState({slideIndex: value});
  };
          
  render() {
    return (
      <div>
        <Tabs
          inkBarStyle={styles.inkBarStyle}
          tabItemContainerStyle={styles.tabsStyle}
          onChange={this.handleChange}
          value={this.state.slideIndex}>          
          <Tab label={this.props.location.name} value={0}/>
          <Tab label="Description" value={1}/>
        </Tabs>
        <SwipeableViews  disabled={false} index={this.state.slideIndex} onChangeIndex={this.handleChange}>
          <div >
             <Map  center={this.props.location.coordinate} name={this.props.location.name}/> 
          </div>
          <div style={styles.slide}>
            <span>
              <p>Name: {this.props.location.name}</p>
            </span>
            <span>
              <p>Address: {this.props.location.address}</p>
            </span>
            <span>
              <p>Coordinates: {this.props.location.coordinate.lat}, {this.props.location.coordinate.lng}</p>
            </span>

          </div>
        </SwipeableViews>
      </div>
    );
  }
}

LocationTabs.propTypes = {
  location: PropTypes.object.isRequired,
  onTouch:PropTypes.func.isRequired
};

export default LocationTabs;