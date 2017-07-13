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
    this.state = {
      sortValue: this.props.toolbar.sort.date,
      groupValue: 1
    };
  }
  toolbarStyle = {
    backgroundColor: "rgb(68, 0, 22)",
    position:"fixed",
    top:0,
    zIndex:10,
    width:"100%"
  };
  titleStyle = {
     color: "rgb(0, 151, 167)"
  };

   handleChangeSortBy = (event, index, sortValue) =>{
      this.setState({sortValue});
      this.props.actions.sortBy(this.props.toolbar.name,sortValue);
    }
   handleChangeGroupBy = (event, index, groupValue) => {
     this.setState({groupValue});
    // this.props.actions.groupBy(this.props.toolbar.name);
    }

  render() {
    return (
      <Toolbar style={this.toolbarStyle}>
        <ToolbarGroup firstChild={true}>
          <DropDownMenu value={this.state.sortValue} onChange={this.handleChangeSortBy}>
            <MenuItem value={this.props.toolbar.sort.date} primaryText={this.props.toolbar.sort.date}/>
            <MenuItem value={this.props.toolbar.sort.az} primaryText={this.props.toolbar.sort.az}/>
          </DropDownMenu>
          <ToolbarSeparator/>
        </ToolbarGroup>
       { this.props.toolbar.groupby.length > 0 &&
        <ToolbarGroup>
          <DropDownMenu value={this.state.groupValue} onChange={this.handleChangeGroupBy}>
            {this.props.toolbar.groupby.map((item,index)=>(
                <MenuItem key={item.name + index} value={index} primaryText={item.name}/>
            ))}           
          </DropDownMenu>
          <ToolbarSeparator/>
        </ToolbarGroup>
        }
        <ToolbarGroup>
          <ToolbarTitle style={this.titleStyle} text={this.props.toolbar.name}/>
          <FontIcon className="muidocs-icon-custom-sort"/>
          {/*<RaisedButton label="Create" primary={true}/> <IconMenu
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