import React from 'react';
import BrowserRouter from 'react-router-dom';
import Route from 'react-router-dom';
import IndexRoute from 'react-router-dom';

import App from './components/App.jsx';
import Login from './components/views/Login.jsx';
import Registration from './components/views/Registration.jsx';

export default (
    <BrowserRouter>
    <Route path="/" component={App} />
        <IndexRoute component={Login} />
        <Route path="/Registration" component={Registration} />

    </BrowserRouter>
);