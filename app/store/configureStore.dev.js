import { createStore, applyMiddleware } from 'redux';

/** Middlewares ***/
import logger from 'redux-logger';

/** Reducer ***/
import rootReducer from '../reducers/';

const loggerMiddleware = logger();

export default function configureStore(initialState) {
    // applyMiddleware supercharges createStore with middleware:

    // We can use it exactly like “vanilla” createStore.
  return createStore(
      rootReducer,
      initialState,
      applyMiddleware(
        loggerMiddleware
      )
  );
}
