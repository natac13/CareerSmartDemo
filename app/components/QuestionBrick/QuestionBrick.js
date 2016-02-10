import React, { PropTypes } from 'react';
import { Map } from 'immutable';

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

    const handleClick = (event) => {
        if ( props.open === false) {
            props.openAnswers(Map({
                id: props.index
            }));
        }
        else {
            props.closeAnswers(Map({
                id: props.index
            }));
        }
    };
    return (
        <div className={style.wrapper}>
            <p className={style.question}> {question} </p>
            <div className={style.openAnswer}>
                <RaisedButton
                    onTouchTap={handleClick}
                    backgroundColor={colors.darkBlue}
                    labelColor={colors.lightText}
                    label="Answer" />

            </div>
            <div
                className={props.open ? style.visible : style.hidden}>
                <ul className={style.answers}>
                    {answerDisplay}
                </ul>
            </div>
        </div>
    );
};

export default QuestionBrick;