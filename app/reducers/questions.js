import { fromJS } from 'immutable';

import {
  OPEN_QUESTION,
  CLOSE_QUESTION,
  CLOSE_ALL_QUESTIONS,
} from '../constants/';

import {
  openAnswers,
  closeAnswers,
  closeAll,
} from '../js/core-questions';

import sample from '../resources/questions.json';

const initialState = fromJS(sample);


const questions = (state = initialState, action) => {
  switch (action.type) {
    // case NEW_QUESTION:
    //     return state;
    case OPEN_QUESTION:
      return openAnswers(state, action);
    case CLOSE_QUESTION:
      return closeAnswers(state, action);
    case CLOSE_ALL_QUESTIONS:
      return closeAll(state);
    default:
      return state;
  }
};

export default questions;
