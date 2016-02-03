import { createStore, applyMiddleware } from 'redux';
import thunk from './middleware/thunk.js';
import { logger } from './middleware/logger.js';
import reducers from './rootReducer.js';

const createStoreWithMiddleware = applyMiddleware(
    thunk,
    logger
)(createStore);

export default function configureStore(initialState) {
    return createStoreWithMiddleware(reducers, initialState);
}