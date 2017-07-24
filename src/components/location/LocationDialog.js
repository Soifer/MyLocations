import React from 'react';
import PropTypes from 'prop-types';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Map from '../maps/map';
import * as locationActions from '../../actions/locationActions';

const customContentStyle = {
    width: '90%',
    maxWidth: 'none'
};

/**
 * The dialog width has been set to occupy the full width of browser through the `contentStyle` property.
 */
class LocaitonDialog extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {
        open: this.props.dialogLocation.open
    };

    componentWillReceiveProps(data) {
        if (data.dialogLocation.open) {
             this.setState({open: true});
        }
    }
    handleOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});

    };

    render() {
        const actions = [ <FlatButton label = "Cancel" primary = {true} onTouchTap = {this.handleClose} />,
                          <FlatButton label = "Submit" primary = {true} onTouchTap = {this.handleClose} />
                        ];

        return (
            <div>
                {/* <IconButton><FontIcon className="material-icons"  onTouchTap={this.handleOpen} color="rgb(68, 0, 22)">explore</FontIcon></IconButton>  */}
                <Dialog
                    title={this.props.dialogLocation.location.name}
                    actions={actions}
                    modal={false}
                    contentStyle={customContentStyle}
                    open={this.state.open}>
                    {this.props.dialogLocation.location.name}
                    <Map  center={this.props.dialogLocation.location && this.props.dialogLocation.location.coordinate} 
                                  name={this.props.dialogLocation.location && this.props.dialogLocation.location.name}/>           
                </Dialog>
            </div>
        );
    }
}

LocaitonDialog.propTypes = {
    dialogLocation: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    return {dialogLocation: state.dialogLocation};
}

export default connect(mapStateToProps)(LocaitonDialog);
