import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {fade} from 'material-ui/utils/colorManipulator';
import { amberA400, amberA700, pinkA200, grey100, grey300, grey400, grey500, white, darkBlack, fullBlack } from 'material-ui/styles/colors';
import AppGlob from './AppGlob';

const muiTheme = getMuiTheme({
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: amberA700,
    primary2Color: amberA400,
    primary3Color: grey400,
    accent1Color: pinkA200,
    accent2Color: grey100,
    accent3Color: grey500,
    textColor: darkBlack,
    secondaryTextColor: fade(darkBlack, 0.54),
    alternateTextColor: white,
    canvasColor: white,
    borderColor: grey300,
    disabledColor: fade(darkBlack, 0.3),
    pickerHeaderColor: amberA400,
    clockCircleColor: fade(darkBlack, 0.07),
    shadowColor: fullBlack,
  }
});

injectTapEventPlugin();

var racine =  document.getElementById('app');

ReactDOM.render(
  <MuiThemeProvider muiTheme={muiTheme}>
    <AppGlob/>
  </MuiThemeProvider>,
  racine);
