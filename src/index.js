import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import { ContextProvider } from './context/settingsContext'
import App from './components/App';
require('dotenv').config();

ReactDOM.render(<ContextProvider> <App /> </ContextProvider>, document.getElementById('root'));

