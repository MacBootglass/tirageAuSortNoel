import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import ActionReorder from 'material-ui/svg-icons/action/reorder';
import TSN_IconMenu from './TSN_IconMenu';

const TSN_AppBar = React.createClass({
  getDefaultProps: function() {
    return {
      title:""
    }
  },

  render: function() {
    return (
      <AppBar
        title={this.props.title}
        iconElementLeft={<div/>}
        iconElementRight={<TSN_IconMenu/>}
      />
    );
  }
});

export default TSN_AppBar;
