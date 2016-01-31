/*=======================================================
=            Commented out section explained            =
=======================================================*/

// for material-ui popover

/*=====  End of Commented out section explained  ======*/


export const openAnswers = (questions, action) => {
    questions = questions.setIn([action.payload.get('id'), 'open'], true);
    // questions = questions.setIn(
    //     [action.payload.get('id'), 'anchorEl'],
    //     action.payload.get('anchorEl')
    // );
    return questions;
};


export const closeAnswers = (questions, action) => {
    questions = questions.setIn([action.payload.get('id'), 'open'], false);
    // questions = questions.setIn(
    //     [action.payload.get('id'), 'anchorEl'],
    //     {}
    // );
    return questions;
};