import { createAction } from 'redux-actions';

import {
    OPEN_ANSWERS,
    CLOSE_ANSWERS
} from '../constants/';

export const openAnswers = createAction(OPEN_ANSWERS);
export const closeAnswers = createAction(CLOSE_ANSWERS);