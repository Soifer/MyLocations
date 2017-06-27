import React, {Component} from 'react';
import PropTypes from 'prop-types';
import LocationPage from './location/LocationPage';
import CategoryPage from './category/CategoryPage';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import BottomToolbar from './common/BottomToolbar';
class App extends Component {
    render() {
        return (
            <div>
                <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
                    <AppBar title="My AppBar"/>
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