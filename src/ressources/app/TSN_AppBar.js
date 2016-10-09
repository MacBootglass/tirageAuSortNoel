import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import ActionReorder from 'material-ui/svg-icons/action/reorder';

import TSN_IconMenu from './TSN_IconMenu';

const TSN_AppBar = React.createClass({
  getInitialState: function() {
    return {
      title:"Tirage au sort de Noël"
    }
  },

  render: function() {
    return (
      <AppBar
        title={this.state.title}
        iconElementLeft={<div/>}
        iconElementRight={<TSN_IconMenu selectTableConfig={this.props.selectTableConfig} selectTableTirage={this.props.selectTableTirage}/>}
      />
    );
  }
});

export default TSN_AppBar;
