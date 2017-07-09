import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn
} from 'material-ui/Table';


const CategoryList = ({categories}) => {
const state = {
    fixedHeader: true,
    fixedFooter: true,
    stripedRows: false,
    showRowHover: false,
    selectable: true,
    multiSelectable: false,
    enableSelectAll: false,
    deselectOnClickaway: true,
    showCheckboxes: true,
    height: '300px'
};
    return (
        <div>
            <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>

                <Table
                    height={state.height}
                    fixedHeader={state.fixedHeader}
                    fixedFooter={state.fixedFooter}
                    selectable={state.selectable}
                    multiSelectable={state.multiSelectable}>
                    <TableHeader
                        displaySelectAll={state.showCheckboxes}
                        adjustForCheckbox={state.showCheckboxes}
                        enableSelectAll={state.enableSelectAll}>
                        <TableRow>
                            <TableHeaderColumn
                                colSpan="3"
                                tooltip="Super Header"
                                style={{
                                textAlign: 'center'
                            }}>
                                Super Header
                            </TableHeaderColumn>
                        </TableRow>
                        <TableRow>
                            <TableHeaderColumn tooltip="The ID">ID</TableHeaderColumn>
                            <TableHeaderColumn tooltip="The Name">Name</TableHeaderColumn>
                            <TableHeaderColumn tooltip="The Status">Status</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody
                        displayRowCheckbox={state.showCheckboxes}
                        deselectOnClickaway={state.deselectOnClickaway}
                        showRowHover={state.showRowHover}
                        stripedRows={state.stripedRows}>
                        {categories.map((row, index) => (
                            <TableRow key={index}>
                                <TableRowColumn>{index}</TableRowColumn>
                                <TableRowColumn>{row.name}</TableRowColumn>
                                <TableRowColumn>{row.status}</TableRowColumn>
                            </TableRow>
                        ))}
                    </TableBody>
                    {/*<TableFooter adjustForCheckbox={this.state.showCheckboxes}>
                        <TableRow>
                            <TableRowColumn>ID</TableRowColumn>
                            <TableRowColumn>Name</TableRowColumn>
                            <TableRowColumn>Status</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn
                                colSpan="3"
                                style={{
                                textAlign: 'center'
                            }}>
                                Super Footer
                            </TableRowColumn>
                        </TableRow>
                    </TableFooter>*/}
                </Table>
            </MuiThemeProvider>
        </div>
    );

}

CategoryList.propTypes = {
    categories: PropTypes.array.isRequired
};

export default CategoryList;