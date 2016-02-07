import { createStore, applyMiddleware } from 'redux';
import thunk from './middleware/thunk.js';
import reducers from './rootReducer.js';

let middleware = [
    thunk
];

if ('production' !== process.env.NODE_ENV) {
    // DEV Middleware
    let { logger } = require('./middleware/logger.js');

    middleware = [...middleware, logger];
}

const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore);

export default function configureStore(initialState) {
    return createStoreWithMiddleware(reducers, initialState);
}