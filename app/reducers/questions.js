import { fromJS } from 'immutable';

import {
    OPEN,
    CLOSE,
    CLOSE_ALL
} from '../constants/';

import {
    openAnswers,
    closeAnswers,
    closeAll
} from '../js/core-questions';

import sample from '../../sample.json';

const initialState = fromJS(sample);


const questions = (state = initialState, action) => {
  switch (action.type) {
    // case NEW_QUESTION:
    //     return state;
    case OPEN:
      return openAnswers(state, action);
    case CLOSE:
      return closeAnswers(state, action);
    case CLOSE_ALL:
      return closeAll(state);
    default:
      return state;
  }
};

export default questions;