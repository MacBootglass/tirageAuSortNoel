import React from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

const TSN_TableTirage = React.createClass({
  render: function() {
    return (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderColumn>ID</TableHeaderColumn>
            <TableHeaderColumn>Nom</TableHeaderColumn>
            <TableHeaderColumn>Offre à</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody>

        </TableBody>
      </Table>
    );
  }
});

export default TSN_TableTirage;
