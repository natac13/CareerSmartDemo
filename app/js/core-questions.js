export const openAnswers = (questions, action) => {
    return questions.setIn([action.payload, 'open'], true);
};