import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as UpperToolbarActions from '../../actions/upperToolbarActions';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';
import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from 'material-ui/Toolbar';
import ToolbarModel from '../../models/toolbarModel';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';


class UpperToolbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sortValue: this.props.toolbar.sort.date,
      groupValue: ''
    };
  }
  toolbarStyle = {
    backgroundColor: "rgb(68, 0, 22)",
    position: "fixed",
    top: 0,
    zIndex: 10,
    width: "100%"
  };
  titleStyle = {
    color: "rgb(0, 151, 167)"
  };

  handleChangeSortBy = (event, index, sortValue) => {
    this.setState({ sortValue });
    this.props.actions.sortBy(this.props.toolbar.name, sortValue);
  }
  handleChangeGroupBy = (event, index, groupValue) => {
    this.setState({ groupValue });
    this.props.actions.groupBy(this.props.toolbar.name, groupValue);
  }

  render() {
    return (
      <Toolbar style={this.toolbarStyle}>
        <ToolbarGroup firstChild={true}>
          <DropDownMenu value={this.state.sortValue} onChange={this.handleChangeSortBy}>
            <MenuItem value={this.props.toolbar.sort.date} primaryText={this.props.toolbar.sort.date} />
            <MenuItem value={this.props.toolbar.sort.az} primaryText={this.props.toolbar.sort.az} />
          </DropDownMenu>
          <ToolbarSeparator />
        </ToolbarGroup>
        {this.props.toolbar.groupby.length > 0 &&
          <ToolbarGroup>
            <DropDownMenu value={this.state.groupValue} onChange={this.handleChangeGroupBy}>
              <MenuItem key={0} value={''} primaryText={'ungroup'} label="ungrouped" />
              {this.props.toolbar.groupby.map((item, index) => (
                <MenuItem key={item.name + index} value={item.name} primaryText={item.name} />
              ))}
            </DropDownMenu>
            <ToolbarSeparator />
          </ToolbarGroup>
        }
        <ToolbarGroup>
          <ToolbarTitle style={this.titleStyle} text={this.props.toolbar.name} />         
        </ToolbarGroup>
        <ToolbarGroup>
          <IconButton iconClassName="muidocs-icon-custom-github" />
          <FontIcon className="material-icons" color="rgb(68, 0, 22)">add_location</FontIcon>
          {/* <FloatingActionButton mini={true}>
            <ContentAdd />
            <i class="material-icons">add_location</i>
          </FloatingActionButton> */}
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
  if (!state.toolbar.hasOwnProperty("name")) {
    return { toolbar: toolbar };
  }
  return { toolbar: state.toolbar };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(UpperToolbarActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UpperToolbar);