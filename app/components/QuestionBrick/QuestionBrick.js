import React, { PropTypes } from 'react';

import Popover from 'material-ui/lib/popover/popover';
import RaisedButton from 'material-ui/lib/raised-button';

import style from './style';
import * as colors from '../../scss/colors';

const QuestionBrick = (props) => {
    const { question, answers, open } = props;


    const answerDisplay = answers.map((answer, index) => {
        return (
            <li
                key={index}
                className={style.answer}>
                {answer}
            </li>
        );
    });

    return (
        <div className={style.wrapper}>
            <p className={style.question}> {question} </p>
            <div className={style.openAnswer}>
                <RaisedButton
                    backgroundColor={colors.darkBlue}
                    labelColor={colors.lightText}
                    label="Answer" />

            </div>
            <ul className={style.answers}>
                {answerDisplay}
            </ul>
        </div>
    );
};

export default QuestionBrick;