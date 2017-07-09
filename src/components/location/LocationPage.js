import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as locationActions from '../../actions/locationActions';
import LocationList from './LocationList';

class LocationPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            locations: Object.assign({}, this.props.locations)
        };
    }

    componentDidMount() {
        this.props.actions.loadToolbar(this.props.locations);
    }

    render() {
        return (<LocationList locations={this.props.locations}/>);
    }
}

LocationPage.propTypes = {
    locations: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    return {locations: state.locations};
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(locationActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(LocationPage);
