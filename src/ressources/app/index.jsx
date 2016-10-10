import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';

import TSN_MuiThemeProvider from './TSN_MuiThemeProvider';

injectTapEventPlugin();
var racine = document.getElementById('app');
ReactDOM.render(<TSN_MuiThemeProvider />, racine);
