import React from 'react';
import {TableRow, TableRowColumn} from 'material-ui/Table';
import IconButton from 'material-ui/IconButton';
import TextField from 'material-ui/TextField';
import ActionDelete from 'material-ui/svg-icons/action/delete';
import ActionDone from 'material-ui/svg-icons/action/done';

import TSN_SelectField from './TSN_SelectField';


const TSN_TableRowConfig = React.createClass({
  getDefaultProps: function() {
    return {
      content: "",
      users: []
    }
  },

  getInitialState: function() {
    return {
      selected: false,
      hoverable: true,
      iconStyle: {float:"right"}
    }
  },

  changeCellState: function() {
    this.setState({selected: !this.state.selected});
  },

  render: function() {
    var id = "TextField" + this.props.content;


    if (this.state.selected === true) {
      return (
        <TableRow>
          <TableRowColumn onDoubleClick={this.changeCellState} >
            <TextField id={id} defaultValue={this.props.content}/>
          </TableRowColumn>
          <TableRowColumn onDoubleClick={this.changeCellState}>
            <TSN_SelectField users={this.props.users}/>
          </TableRowColumn>
          <TableRowColumn>
            <IconButton style={this.state.iconStyle}>
              <ActionDone/>
            </IconButton>
          </TableRowColumn>
        </TableRow>
      );
    }
    else {
      return (
        <TableRow hoverable={this.state.hoverable}>
          <TableRowColumn onDoubleClick={this.changeCellState}>
            {this.props.content}
          </TableRowColumn>
          <TableRowColumn onDoubleClick={this.changeCellState}>
            {this.props.content}
          </TableRowColumn>
          <TableRowColumn>
            <IconButton style={this.state.iconStyle}>
              <ActionDelete/>
            </IconButton>
          </TableRowColumn>
        </TableRow>
      );
    }
  }
});

export default TSN_TableRowConfig;
