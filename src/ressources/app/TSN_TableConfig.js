import React from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import ActionDeleteForever from 'material-ui/svg-icons/action/delete-forever';
import ActionDone from 'material-ui/svg-icons/action/done';

import TSN_TableRowConfig from './TSN_TableRowConfig';
import TSN_SelectField from './TSN_SelectField';

const TSN_TableConfig = React.createClass({
  getInitialState: function() {
    return {
      selectable: false,
      showCheckboxes: false,
      iconStyle: {float:"right"}
    }
  },

  getDefaultProps: function() {
    return {
      users:[]
    }
  },

  render: function() {
    return (
      <Table selectable={this.state.selectable} >
        <TableHeader
          displaySelectAll={this.state.showCheckboxes}
          adjustForCheckbox={this.state.showCheckboxes}
        >
          <TableRow>
            <TableHeaderColumn>Nom</TableHeaderColumn>
            <TableHeaderColumn>Ne peut offrir à</TableHeaderColumn>
            <TableHeaderColumn>
              <IconButton style={this.state.iconStyle}>
                <ActionDeleteForever/>
              </IconButton>
            </TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox={this.state.showCheckboxes} >
          {
            this.props.users.map(function(user, i){
              return(
                <TSN_TableRowConfig
                  key={i}
                  content={user.name}
                  users={[user]}
                />
              );
            })
          }

          <TableRow selectable={this.state.selectable} >
            <TableRowColumn>
              <TextField hintText="Saisir un nom"/>
            </TableRowColumn>
            <TableRowColumn>
              <TSN_SelectField users={this.props.users}/>
            </TableRowColumn>
            <TableRowColumn>
              <IconButton style={this.state.iconStyle}>
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
