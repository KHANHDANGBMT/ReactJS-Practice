import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRoute } from 'react-router-dom';

import './index.css';
import App from './App';

const app =(
    <BrowserRoute>
        <App/>
    </BrowserRoute>
);

ReactDOM.render(app, document.getElementById('root'));