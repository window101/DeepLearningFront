import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './Root';
import configureStore from './redux/configureStore';
import reportWebVitals from './reportWebVitals';

const store = configureStore();

ReactDOM.render(<Root store={store}/>, document.getElementById('root'));

reportWebVitals();
