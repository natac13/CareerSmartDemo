import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { mergeAll } from 'ramda';

import questions from './questions';
import users from './users';
import contact from './contact';

const rootReducer = combineReducers(mergeAll([
  {},
  {
    questions,
    users,
    contact,
    form: formReducer,
  },
]));

export default rootReducer;
