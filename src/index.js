import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import tachyons from 'tachyons';
import { robots } from './robots';

ReactDOM.render(
  //everything has to be wrapped in a div and you can only retuen one
  <App />,
  document.getElementById('root')
);
registerServiceWorker();
