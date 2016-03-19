import {
  TESTIMONIALS_OPEN,
  TESTIMONIALS_CLOSE,
} from '../constants/';

import { createAction } from 'redux-actions';

export const testimonialsOpen = createAction(TESTIMONIALS_OPEN);
export const testimonialsClose = createAction(TESTIMONIALS_CLOSE);
