import React from 'react';
import PropTypes from 'prop-types';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';

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
        open: false
    };

    handleOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };

    render() {
        const actions = [
         <FlatButton label = "Cancel" primary = {true}  onTouchTap = {this.handleClose} />,
             < FlatButton label = "Submit" primary = {true} onTouchTap = {this.handleClose} />
        ];

        return (
            <div>
                <IconButton><FontIcon className="material-icons"  onTouchTap={this.handleOpen} color="rgb(68, 0, 22)">explore</FontIcon></IconButton>
                <Dialog
                    title={this.props.location.name}
                    actions={actions}
                    modal={false}
                    contentStyle={customContentStyle}
                    open={this.state.open}>
                     {this.props.location.name}
                </Dialog>
            </div>
        );
    }
}

LocaitonDialog.propTypes = {
    location : PropTypes.object.isRequired
};

export default LocaitonDialog;