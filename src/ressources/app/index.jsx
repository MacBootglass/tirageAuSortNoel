import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {fade} from 'material-ui/utils/colorManipulator';
import {redA400, redA700, pinkA200, grey100, grey300, grey400, grey500, white, darkBlack, fullBlack} from 'material-ui/styles/colors';

import TSN_AppBar from './TSN_AppBar';
import TSN_TableConfig from './TSN_TableConfig';
import TSN_TableTirage from './TSN_TableTirage';

const muiTheme = getMuiTheme({
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: redA700,
    primary2Color: redA400,
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
    pickerHeaderColor: redA400,
    clockCircleColor: fade(darkBlack, 0.07),
    shadowColor: fullBlack,
  }
});

var racine = document.getElementById('app');

var selectTableConfig = function() {
  ReactDOM.render(
    <MuiThemeProvider muiTheme={muiTheme}>
      <div>
        <TSN_AppBar
          selectTableConfig={selectTableConfig}
          selectTableTirage={selectTableTirage}
        />
        <TSN_TableConfig/>
      </div>
    </MuiThemeProvider>,
  racine);
}

var selectTableTirage = function() {
  ReactDOM.render(
    <MuiThemeProvider muiTheme={muiTheme}>
      <div>
        <TSN_AppBar
          selectTableConfig={selectTableConfig}
          selectTableTirage={selectTableTirage}
        />
        <TSN_TableTirage/>
      </div>
    </MuiThemeProvider>,
  racine);
}




injectTapEventPlugin();
ReactDOM.render(
  <MuiThemeProvider muiTheme={muiTheme}>
    <div>
      <TSN_AppBar
        selectTableConfig={selectTableConfig}
        selectTableTirage={selectTableTirage}
      />
      <TSN_TableConfig/>
    </div>
  </MuiThemeProvider>,
racine);
