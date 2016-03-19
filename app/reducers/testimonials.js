import { Map } from 'immutable';

import {
  TESTIMONIALS_OPEN,
  TESTIMONIALS_CLOSE,
} from '../constants/';

const initialState = Map({
  isTestimonialsOpen: false,
});

function testimonials(state = initialState, action) {
  switch (action.type) {
    case TESTIMONIALS_OPEN:
      return state.set('isTestimonialsOpen', true);
    case TESTIMONIALS_CLOSE:
      return state.set('isTestimonialsOpen', false);
    default:
      return state;
  }
}

export default testimonials;
