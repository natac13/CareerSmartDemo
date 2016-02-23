import React, { PropTypes } from 'react';
import { Map } from 'immutable';

import Tooltip from 'react-toolbox/lib/tooltip';
import { Button, IconButton } from 'react-toolbox/lib/button';
import Icon from 'react-fa';

const TooltipButton = Tooltip(Button);
const TooltipIconButton = Tooltip(IconButton);

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
                <IconButton
                    floating
                    neutral={false}
                    onTouchTap={handleClick}
                    icon={<Icon name="question-circle" />}
                    className={style.openAnswer} ></IconButton>

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