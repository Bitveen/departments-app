import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import { createStore, combineReducers } from 'redux';


import * as reducers from 'reducers';


const store = createStore(combineReducers({
    departments: reducers.departments,
    rounting: routerReducer
}));


const history = syncHistoryWithStore(browserHistory, store);




const routes = (
    <Route path='/' component={App} />
);


render(
    <Provider store={store}>
        <Router history={history}>
            {routes}
        </Router>
    </Provider>, document.getElementById('app'));
