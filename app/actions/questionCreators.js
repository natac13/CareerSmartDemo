import { createAction } from 'redux-actions';

import {
    OPEN_QUESTION,
    CLOSE_QUESTION,
    CLOSE_ALL_QUESTIONS,
} from '../constants/';

export const openQuestion = createAction(OPEN_QUESTION);
export const closeQuestion = createAction(CLOSE_QUESTION);
export const closeAllQuestions = createAction(CLOSE_ALL_QUESTIONS);
