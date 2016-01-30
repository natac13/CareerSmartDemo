import React, { PropTypes } from 'react';

import Popover from 'material-ui/lib/popover/popover';
import RaisedButton from 'material-ui/lib/raised-button';

import style from './style';

const QuestionBrick = (props) => {
    const { question, answers, open } = props;


    const answerDisplay = answers.map((answer, index) => {
        return (
            <li key={index}>
                {answer}
            </li>
        );
    });

    return (
        <div className={style.wrapper}>
            <p> {question} </p>
            <ul>
                {answerDisplay}
            </ul>
        </div>
    );
};

export default QuestionBrick;