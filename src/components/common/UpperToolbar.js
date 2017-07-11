import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as UpperToolbarActions from '../../actions/upperToolbarActions';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import ToolbarModel from '../../models/toolbarModel';

class UpperToolbar extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   value: 2,
    //   groupValue: 1
    // };
  }

  handleChange = ()=>{return "";};

  render() {
    // console.log("categ",this.props.toolbar.groupby)
    return (
      <Toolbar>
        <ToolbarGroup firstChild={true}>
          <DropDownMenu value={1} onChange={this.handleChange}>
            <MenuItem value={1} primaryText={this.props.toolbar.sort.az}/>
            <MenuItem value={2} primaryText={this.props.toolbar.sort.date}/>
          </DropDownMenu>
        </ToolbarGroup>
        <ToolbarGroup>
          <DropDownMenu value={1} onChange={this.handleChange}>
            <MenuItem
              value={1}
              primaryText={this.props.toolbar.groupby.length > 0 && this.props.toolbar.groupby[0].name}/>
          </DropDownMenu>
        </ToolbarGroup>
        <ToolbarGroup>
          <ToolbarTitle text={this.props.toolbar.name}/>
          <FontIcon className="muidocs-icon-custom-sort"/>
          <ToolbarSeparator/> {/*<RaisedButton label="Create" primary={true}/> <IconMenu
            iconButtonElement={
              <IconButton touch={true}>
                <NavigationExpandMoreIcon />
              </IconButton>
            }
          >
            <MenuItem primaryText="Download" />
            <MenuItem primaryText="More Info" />
          </IconMenu>*/}
        </ToolbarGroup>
      </Toolbar>
    );
  }
}


UpperToolbar.propTypes = {
  toolbar: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
   let toolbar = {};
   toolbar = new ToolbarModel();
  if(!state.toolbar.hasOwnProperty("name")){
      return{ toolbar:toolbar};
  }
  return {toolbar: state.toolbar};
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(UpperToolbarActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UpperToolbar);