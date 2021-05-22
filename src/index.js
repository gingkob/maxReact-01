import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import ContextComponent from './components/store/ContextUser'
import App from './components/App';

ReactDOM.render(<ContextComponent><App /></ContextComponent>, document.getElementById('root'));