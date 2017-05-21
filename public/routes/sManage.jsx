import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

import SManage from '../containers/SManage.jsx';

const ROOT = document.getElementById('sManageRoot');

ReactDOM.render((<Router basename="/smanage">
    <Route path='/' component={SManage} />
</Router>), ROOT);