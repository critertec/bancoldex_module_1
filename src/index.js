import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/pages/AppPage';
import './index.css';

import Scorm from './scorm/Scorm'

ReactDOM.render(
  <React.StrictMode>
    <App Scorm={Scorm} />
  </React.StrictMode>,
  document.getElementById('root')
);
