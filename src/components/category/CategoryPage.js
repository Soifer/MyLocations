import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as categoryActions from '../../actions/categoryActions';

class CategoryPage extends Component {
    render() {
        return (
            <div>
                <h1>CategoryPage</h1>
            </div>
        );
    }
}


function mapStateToProps(state, ownProps) {
    return {categories: state.categories};
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(categoryActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryPage);

