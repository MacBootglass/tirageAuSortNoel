import React from 'react';

import TSN_AppBar from './TSN_AppBar';
import TSN_Drawer from './TSN_Drawer';
import TSN_TableConfig from './TSN_TableConfig';
import TSN_TableTirage from './TSN_TableTirage';

const TSN_Global = React.createClass({
  render: function() {
    return (
      <div>
        <TSN_AppBar/>
        <TSN_TableConfig/>
      </div>
    );
  }
});

export default TSN_Global;
