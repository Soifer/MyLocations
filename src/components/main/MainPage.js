import React, {Component} from 'react';
import PropTypes from 'prop-types';
import CategoryPage from '../category/CategoryPage';
import LocationPage from '../location/LocationPage';

class MainPage extends Component {
    render() {
        return (
            <div>
                <LocationPage/>
                <CategoryPage/>
            </div>
        );
    }
}

export default MainPage;