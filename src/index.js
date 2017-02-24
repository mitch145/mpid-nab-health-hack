import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Theme from './Theme';
import './index.css';


ReactDOM.render(
  <MuiThemeProvider muiTheme={Theme}>
    <App />
  </MuiThemeProvider>,
  document.getElementById('root')
);
