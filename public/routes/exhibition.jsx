import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

import Exhibition from '../containers/exhibition.jsx';

const ROOT = document.getElementById('exhibitionRoot');

ReactDOM.render((<Router basename="/exhibition">
    <Route path='/' component={Exhibition} />
</Router>), ROOT);