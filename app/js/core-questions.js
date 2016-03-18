function openAnswers(questions, action) {
  return questions.setIn([action.payload, 'open'], true);
}

function closeAnswers(questions, action) {
  return questions.setIn([action.payload, 'open'], false);
}

function isOpen(question) {
  return question.get('open') === true;
}
function checkAnyOpen(questionsMap) {
  return questionsMap.some(isOpen);
}

function closeAll(questions) {
  return questions.map((question) => question.set('open', false));
}

export {
  openAnswers,
  closeAnswers,
  checkAnyOpen,
  closeAll,
};
