import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { mergeAll } from 'ramda';

import questions from './questions';
import users from './users';
import contact from './contact';
import testimonials from './testimonials';

const rootReducer = combineReducers(mergeAll([
  {},
  {
    questions,
    users,
    contact,
    testimonials,
    form: formReducer,
  },
]));

export default rootReducer;
