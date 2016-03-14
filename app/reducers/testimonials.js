import { fromJS } from 'immutable';

import {
  TESTIMONIALS_OPEN,
  TESTIMONIALS_CLOSE,
} from '../constants/';

import testimonials from '../resources/testimonials.json';

const initialState = fromJS({
  isTestimonialsOpen: false,
  testimonials,
});

function testimonial(state = initialState, action) {
  switch (action.type) {
    case TESTIMONIALS_OPEN:
      return state.set('isTestimonialsOpen', true);
    case TESTIMONIALS_CLOSE:
      return state.set('isTestimonialsOpen', false);
    default:
      return state;
  }
}

export default testimonial;
