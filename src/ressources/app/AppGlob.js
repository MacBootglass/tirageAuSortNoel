import React from 'react';
import ReactDOM from 'react-dom';
import $ from "jquery";

import AppBar from 'material-ui/AppBar';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import IconButton from 'material-ui/IconButton';
import AvPauseCircleFilled from 'material-ui/svg-icons/av/play-circle-filled';

var list = require("../datas/users.json");

var AppGlob = React.createClass({
  getInitialState: function() {
    return {

    }
  },

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
      <div>
        <AppBar
          title="Tirage au sort de Noël"
          iconElementLeft={<div/>}
        />
        <Table>
          <TableHeader>
            <TableRow>
              <TableHeaderColumn>ID</TableHeaderColumn>
              <TableHeaderColumn>Nom</TableHeaderColumn>
              <TableHeaderColumn>Offre à</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody>
            {content}

          </TableBody>
        </Table>
      </div>
    );
  }
});

export default AppGlob;
