import { combineReducers } from 'redux';
import { routeReducer } from 'redux-simple-router';
import { reducer as formReducer } from 'redux-form';
import { mergeAll } from 'ramda';

import questions from './questions';
import users from './users';
import testimonials from './testimonials';

const rootReducer = combineReducers(mergeAll([
  {},
  {
    questions,
    users,
    testimonials,
  },
  {
    routing: routeReducer,
    form: formReducer,
  },

]));

export default rootReducer;
