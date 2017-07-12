import React, {Component} from 'react';
import PropTypes from 'prop-types';
import LocationPage from './location/LocationPage';
import CategoryPage from './category/CategoryPage';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import UpperToolbar from './common/UpperToolbar';

import BottomToolbar from './common/BottomToolbar';
class App extends Component {
    render() {
        return (
            <div>
                <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)} >
                    <UpperToolbar/>
                </MuiThemeProvider>
                {this.props.children}
                <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
                    <BottomToolbar/>
                </MuiThemeProvider>
            </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.object.isRequired
};

export default App;