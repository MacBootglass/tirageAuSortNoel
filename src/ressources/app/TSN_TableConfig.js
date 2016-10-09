import React from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import SelectField from 'material-ui/SelectField';
import TextField from 'material-ui/TextField';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import ActionDelete from 'material-ui/svg-icons/action/delete';
import ActionDeleteForever from 'material-ui/svg-icons/action/delete-forever';
import ActionDone from 'material-ui/svg-icons/action/done';

const TSN_SelectField = React.createClass({
  getDefaultProps: function() {
    return {
      users: []
    }
  },

  getInitialState: function() {
    return {
      value: 0
    }
  },

  handleChange: function(event, index, value) {
    this.setState(
       {
        value
      }
    );
  },

  render: function() {
    return (
      <SelectField
        value={this.state.value}
        onChange={this.handleChange}
      >
      {
        this.props.users.map(function(user, i){
          return (
            <MenuItem
              key={i}
              value={user.id}
              primaryText={user.name}
            />
          );
        })
      }
      </SelectField>
    );
  }
});

const TSN_TableConfig = React.createClass({
  getInitialState: function() {
    return {
      stripedRows: false,
      showRowHover: true,
      selectable: false,
      multiSelectable: false,
      enableSelectAll: false,
      deselectOnClickaway: true,
      showCheckboxes: false
    }
  },

  getDefaultProps: function() {
    return {
      users:[]
    }
  },

  render: function() {
    return (
      <Table
        selectable={this.state.selectable}
        multiSelectable={this.state.multiSelectable}
      >
        <TableHeader
          displaySelectAll={this.state.showCheckboxes}
          adjustForCheckbox={this.state.showCheckboxes}
          enableSelectAll={this.state.enableSelectAll}
        >
          <TableRow>
            <TableHeaderColumn>ID</TableHeaderColumn>
            <TableHeaderColumn>Nom</TableHeaderColumn>
            <TableHeaderColumn>Ne peut offrir à</TableHeaderColumn>
            <TableHeaderColumn>
              <IconButton>
                <ActionDeleteForever/>
              </IconButton>
            </TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody
          displayRowCheckbox={this.state.showCheckboxes}
          deselectOnClickaway={this.state.deselectOnClickaway}
          showRowHover={this.state.showRowHover}
          stripedRows={this.state.stripedRows}
        >
          {
            this.props.users.map(function(user, i){
              return(
                <TableRow key={i}>
                  <TableRowColumn>{user.id}</TableRowColumn>
                  <TableRowColumn>{user.name}</TableRowColumn>
                  <TableRowColumn>null</TableRowColumn>
                  <TableRowColumn>
                    <IconButton>
                      <ActionDelete/>
                    </IconButton>
                  </TableRowColumn>
                </TableRow>
              );
            })
          }

          <TableRow selectable={false} hovered={false} hoverable={false}>
            <TableRowColumn style={{color:"red"}}>
              15
            </TableRowColumn>
            <TableRowColumn>
              <TextField hintText="Saisir un nom"/>
            </TableRowColumn>
            <TableRowColumn>
              <TSN_SelectField users={this.props.users}/>
            </TableRowColumn>
            <TableRowColumn>
              <IconButton>
                <ActionDone/>
              </IconButton>
            </TableRowColumn>
          </TableRow>
        </TableBody>
      </Table>
    );
  }
});

export default TSN_TableConfig;
