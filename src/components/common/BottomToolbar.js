import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';
import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import { browserHistory } from 'react-router';
import url from './urlConverter';

const categoryIcon = <FontIcon className="material-icons">blur_on</FontIcon>;
const nearbyIcon = <FontIcon className="material-icons">room</FontIcon>;

class BottomToolbar extends Component {
    // constructor(props) {     super(props);     this.state = {
    // selectedIndex: 0     }; }
    style = {
        position: 'fixed',
        bottom: 0
    };
    state = {
        selectedIndex: 0
    };

    select = (index) => {
         this.setState({selectedIndex: index});
         browserHistory.push('/' + url[index]);
        };

    render() {
        return (
            <div>
            <Paper  zDepth={1}>
                <BottomNavigation style={this.style} selectedIndex={this.state.selectedIndex}>
                    <BottomNavigationItem
                        label="Locations"
                        icon={nearbyIcon}
                        onTouchTap={() => this.select(0)}/>
                    <BottomNavigationItem
                        label="Categories"
                        icon={categoryIcon}
                        onTouchTap={() => this.select(1)}/>
                </BottomNavigation>
            </Paper>
            </div>
        );
    }
}

export default BottomToolbar;