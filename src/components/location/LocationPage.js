import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as locationActions from '../../actions/locationActions';
import LocationList from './LocationList';

class LocationPage extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.actions.loadLocations();
    }

    render() {
        return (
            <div>
                <LocationList locations={this.props.locations} groupby={this.props.groupby} />
            </div>
        );
    }
}

LocationPage.defaultProps = {
    locations: [],
    groupby: '-1'
};

LocationPage.propTypes = {
    locations: PropTypes.array.isRequired,
    groupby: PropTypes.string,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        locations: state.locations,
        groupby: state.groupby
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(locationActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(LocationPage);
