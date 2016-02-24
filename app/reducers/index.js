import { combineReducers } from 'redux';
import { routeReducer }    from 'redux-simple-router';
import { reducer as formReducer } from 'redux-form';
import { mergeAll } from 'ramda';

import questions from './questions';
import users from './users';

const rootReducer = combineReducers(mergeAll([
  {},
  {
    questions,
    users
  },
  {
    routing: routeReducer,
    form: formReducer
  }

]));


export default rootReducer;