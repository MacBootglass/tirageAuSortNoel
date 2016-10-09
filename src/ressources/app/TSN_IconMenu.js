import React from 'react';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MenuItem from 'material-ui/MenuItem';
import ActionReorder from 'material-ui/svg-icons/action/reorder';

const TSN_IconMenu = React.createClass({
  render: function() {
    return (
      <IconMenu
        iconButtonElement={<IconButton><ActionReorder /></IconButton>}
        anchorOrigin={{horizontal: 'left', vertical: 'top'}}
        targetOrigin={{horizontal: 'left', vertical: 'top'}}
      >
        <MenuItem primaryText="Configuration" />
        <MenuItem primaryText="Tirage" />
      </IconMenu>
    );
  }
});



export default TSN_IconMenu;
