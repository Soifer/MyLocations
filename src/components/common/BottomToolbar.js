import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Paper from 'material-ui/Paper';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';
import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import {browserHistory} from 'react-router';
import url from '../../tools/urlConverter';

const categoryIcon = <FontIcon className="material-icons">blur_on</FontIcon>;
const nearbyIcon = <FontIcon className="material-icons">room</FontIcon>;

class BottomToolbar extends Component {
    constructor(props) {
        super(props);
        const state = {
            selectedIndex: this.props.selectedIndex
        };
    }

    style = {
        position: 'fixed',
        bottom: 0,
        zIndex: 10
    };

    select = (index) => {
        this.setState({selectedIndex: index});
        browserHistory.push('/' + url[index]);
    };

    render() {
        return (
            <div>
                <Paper zDepth={1}>
                    <BottomNavigation style={this.style} selectedIndex={this.props.selectedIndex}>
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

BottomToolbar.propTypes = {
    selectedIndex: PropTypes.number.isRequired
};

function mapStateToProps(state, ownProps) {
    return {selectedIndex: state.selectedIndex};
}

export default connect(mapStateToProps)(BottomToolbar);
