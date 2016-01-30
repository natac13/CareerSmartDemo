import { combineReducers } from 'redux';
import { routeReducer }    from 'redux-simple-router';
import { reducer as formReducer } from 'redux-form';

import questionAnswers from './questions';

const rootReducer = combineReducers(Object.assign(
    {},
    {
        questionAnswers
    },
    {
        routing: routeReducer,
        form: formReducer
    }

));

export default rootReducer;