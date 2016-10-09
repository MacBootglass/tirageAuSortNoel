import React from 'react';

import TSN_AppBar from './TSN_AppBar';
import TSN_TableConfig from './TSN_TableConfig';
import TSN_TableTirage from './TSN_TableTirage';

const TSN_Global = React.createClass({
  getInitialState: function() {
    return {
      titleAppBar: "Tirage au sort de Noël"
    }
  },

  render: function() {
    return (
      <div>
        <TSN_AppBar
          title={this.state.titleAppBar}
          clickOnLeftButton={this.clickOnLeftButton}
        />
        <TSN_TableConfig/>
      </div>
    );
  }
});

export default TSN_Global;
