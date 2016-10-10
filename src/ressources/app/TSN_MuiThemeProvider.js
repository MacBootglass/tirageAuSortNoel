import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {fade} from 'material-ui/utils/colorManipulator';
import {redA400, redA700, pinkA200, grey100, grey300, grey400, grey500, white, darkBlack, fullBlack} from 'material-ui/styles/colors';
import TSN_Global from './TSN_Global';

const muiTheme = getMuiTheme({
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: redA700,
    primary2Color: redA400,
    primary3Color: grey400,
    accent1Color: redA700,
    accent2Color: grey100,
    accent3Color: grey500,
    textColor: darkBlack,
    secondaryTextColor: fade(darkBlack, 0.54),
    alternateTextColor: white,
    canvasColor: white,
    borderColor: grey300,
    disabledColor: fade(darkBlack, 0.3),
    pickerHeaderColor: redA400,
    clockCircleColor: fade(darkBlack, 0.07),
    shadowColor: fullBlack,
  }
});

const TSN_MuiThemeProvider = React.createClass({
  render: function () {
    return(
      <MuiThemeProvider muiTheme={muiTheme}>
       <TSN_Global/>
      </MuiThemeProvider>
    );
  }
});

export default TSN_MuiThemeProvider;
