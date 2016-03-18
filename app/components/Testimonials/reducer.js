import { fromJS } from 'immutable';
import { curry } from 'ramda';

import {
  TESTIMONIALS_OPEN,
  TESTIMONIALS_CLOSE,
} from './constants';

import testimonials from './testimonials.json';

const testimonialsClose = curry((dispatch, event) => {
  event.preventDefault();
  // if (typeof dispatch !== 'function') { return false; }
  return dispatch({ type: TESTIMONIALS_CLOSE });
});

const testimonialsOpen = curry((dispatch, event) => {
  event.preventDefault();
  return dispatch({ type: TESTIMONIALS_OPEN });
});

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

export {
  initialState,
  testimonialsOpen,
  testimonialsClose,
};
