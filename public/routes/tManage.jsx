import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

import TManage from '../containers/tManage.jsx';

const ROOT = document.getElementById('tmanageRoot');

ReactDOM.render((<Router basename="/tmanage">
                    <Route path='/' component={TManage} />
                </Router>), ROOT);