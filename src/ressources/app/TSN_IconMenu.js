import React from 'react';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MenuItem from 'material-ui/MenuItem';
import ActionReorder from 'material-ui/svg-icons/action/reorder';

const TSN_IconMenu = React.createClass({
  getInitialState: function() {
    return {
      menuItem: ["Configuration", "Tirage"]
    }
  },

  render: function() {
    var items = this.state.menuItem.map(function(item, i){
      return (<MenuItem key={i} primaryText={item} />);
    });

    return (
      <IconMenu
        iconButtonElement={<IconButton><ActionReorder /></IconButton>}
        anchorOrigin={{horizontal: 'left', vertical: 'top'}}
        targetOrigin={{horizontal: 'left', vertical: 'top'}}
      >
        <MenuItem primaryText="Configuration" onTouchTap={this.props.selectTableConfig}/>
        <MenuItem primaryText="Tirage" onTouchTap={this.props.selectTableTirage}/>
      </IconMenu>
    );
  }
});



export default TSN_IconMenu;
