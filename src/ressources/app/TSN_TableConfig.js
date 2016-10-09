import React from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

var list = require("../datas/users.json");

const TSN_TableConfig = React.createClass({
  render: function() {

    var content = [];


    for (var i = 0; i < list.users.length; i++) {
      content.push(
        <TableRow key={i}>
          <TableRowColumn>{list.users[i].id}</TableRowColumn>
          <TableRowColumn>{list.users[i].user}</TableRowColumn>
          <TableRowColumn>null</TableRowColumn>
        </TableRow>
      );
    }

    return (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderColumn>ID</TableHeaderColumn>
            <TableHeaderColumn>Nom</TableHeaderColumn>
            <TableHeaderColumn>Contraintes</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody>
          {content}

        </TableBody>
      </Table>
    );
  }
});

export default TSN_TableConfig;
