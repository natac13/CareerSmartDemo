import { Map } from 'immutable';
/*=======================================================
=            Commented out section explained            =
=======================================================*/

// for material-ui popover

/*=====  End of Commented out section explained  ======*/


export const openAnswers = (questions, action) => {
  questions = questions.setIn([action.payload, 'open'], true);

  return questions;
};


export const closeAnswers = (questions, action) => {
  questions = questions.setIn([action.payload, 'open'], false);

  return questions;
};

function isOpen(question) {
  return question.get('open') === true;
}
export const checkAnyOpen = (questionsMap) => {
  return questionsMap.some(isOpen);
};

export function closeAll(questions) {
  return questions.map((question) => question.set('open', false))
}