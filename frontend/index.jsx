import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';


import rootReducer from 'reducers';
import { fetchDepartments } from 'actions';


import App from 'App';
import Index from 'Index';
import DepartmentsListView from 'DepartmentsListView';
import DepartmentView from 'DepartmentView';
import DepartmentCreate from 'DepartmentCreate';
import DepartmentEdit from 'DepartmentEdit';

require('style!css!sass!style/app.scss');


const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

const history = syncHistoryWithStore(browserHistory, store);


const routes = (
    <Route path='/' component={App}>
        <Route path='/departments' component={DepartmentsListView} />
        <Route path='/department/create' component={DepartmentCreate} />
        <Route path='/department/:id' component={DepartmentView} />
        <Route path='/department/:id/edit' component={DepartmentEdit} />
        <IndexRoute component={Index} />
    </Route>
);


render(
    <Provider store={store}>
        <Router history={history}>
            {routes}
        </Router>
    </Provider>, document.getElementById('app'));
