import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router} from 'react-router'
import { createHistory } from 'history';
import { Provider } from 'react-redux';

import configureStore from './redux/configureStore';
import routes from './routes';

const history = createHistory();
const initialState = window.__INITIAL_STATE__;
const store = configureStore(initialState);

// Render the main component into the dom
ReactDOM.render((
    <Provider store={store}>
        <Router history={history}>
            {routes}
        </Router>
    </Provider>
), document.getElementById('app'));