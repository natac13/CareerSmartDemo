import React, { PropTypes } from 'react';

import QuestionBrick from '../QuestionBrick';

import style from './style.scss';

const QuestionGrouping = (props) => {
    const questions = props.questionAnswers.get('questions').map((question, index) => {
        return (
            <QuestionBrick
                key={index}
                index={index}
                question={question.get('question')}
                answers={question.get('answers')}
                open={question.get('open')}
                openAnswers={props.actions.openAnswers}
                closeAnswers={props.actions.closeAnswers} />
        );
    });
    return(
        <div className={style.wrapper}>
            {questions.get('1')}
            {questions.get('2')}
            {questions.get('3')}
            {questions.get('4')}
            {questions.get('5')}
            {questions.get('6')}
        </div>
    );
};

export default QuestionGrouping;