import React from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const TSN_SelectField = React.createClass({
  getDefaultProps: function() {
    return {
      users: []
    }
  },

  getInitialState: function() {
    return {
      value: 0
    }
  },

  handleChange: function(event, index, value) {
    this.setState({ value });
  },

  render: function() {
    return (
      <SelectField
        value={this.state.value}
        onChange={this.handleChange}
      >
      {
        this.props.users.map(function(user, i){
          return (
            <MenuItem
              key={i}
              value={user.id}
              primaryText={user.name}
            />
          );
        })
      }
      </SelectField>
    );
  }
});

export default TSN_SelectField;
