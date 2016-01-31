import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router} from 'react-router'
import { createHistory } from 'history';
import routes from './routes';

var history = createHistory();

// Render the main component into the dom
ReactDOM.render((
    <Router history={history}>
        {routes}
    </Router>
), document.getElementById('app'));