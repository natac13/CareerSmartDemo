import { createStore, applyMiddleware } from 'redux';

/*** Middlewares ***/
import logger from 'redux-logger';

/*** Reducer ***/
import rootReducer from '../reducers/';


import { createHistory } from 'history';
import { syncHistory, routeReducer } from 'redux-simple-router';

export const history = createHistory();
// Sync dispatched route actions to the history
const reduxRouterMiddleware = syncHistory(history);

const loggerMiddleware = logger();

export default function configureStore(initialState) {
    // applyMiddleware supercharges createStore with middleware:

    // We can use it exactly like “vanilla” createStore.
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(
            reduxRouterMiddleware,
            loggerMiddleware
        )
    );
}