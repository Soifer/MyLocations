import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as categoryActions from '../../actions/categoryActions';
import CategoryList from './CategoryList';

class CategoryPage extends Component {
    constructor(props) {
        super(props);
    }
   componentWillMount(){
        this.props.actions.loadCategories(this.props.categories);
    }
    render() {        
        return (
            <CategoryList categories={this.props.categories}/>
        );
    }
}

CategoryPage.defaultProps = {
    categories:[]
};

CategoryPage.propTypes = {
    categories: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};


function mapStateToProps(state, ownProps) {    
    return {categories: state.categories};
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(categoryActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryPage);
