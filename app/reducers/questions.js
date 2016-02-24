import { fromJS } from 'immutable';

import {
    OPEN_ANSWERS,
    CLOSE_ANSWERS
} from '../constants/';

import {
    openAnswers,
    closeAnswers
} from '../js/core-questions';

import sample from '../../questionSample.json';

const initialState = fromJS(sample);


const questions = (state = initialState, action) => {
  switch (action.type) {
    // case NEW_QUESTION:
    //     return state;
    case OPEN_ANSWERS:
      return state.set(
          'questions',
          openAnswers(state.get('questions'), action)
      );
    case CLOSE_ANSWERS:
      return state.set(
          'questions',
          closeAnswers(state.get('questions'), action)
      );
    default:
      return state;
  }
};

export default questions;