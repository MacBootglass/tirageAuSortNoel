import React from 'react';

import TSN_AppBar from './TSN_AppBar';
import TSN_TableConfig from './TSN_TableConfig';
import TSN_TableTirage from './TSN_TableTirage';

var userList = require("../datas/users.json").users;

const TSN_Global = React.createClass({
  getInitialState: function() {
    return {
      currentTable: 0
    }
  },

  selectTableConfig: function() {
    this.setState({currentTable: 0});
  },

  selectTableTirage: function() {
    this.setState({currentTable: 1});
  },

  render: function() {
    if (this.state.currentTable === 1) {
      return (
        <div>
          <TSN_AppBar
            selectTableConfig={this.selectTableConfig}
            selectTableTirage={this.selectTableTirage}
          />
          <TSN_TableTirage/>
        </div>
      );
    }
    else {
      return (
        <div>
          <TSN_AppBar
            selectTableConfig={this.selectTableConfig}
            selectTableTirage={this.selectTableTirage}
          />
          <TSN_TableConfig users={userList}/>
        </div>
      );
    }
  }
});

export default TSN_Global;
