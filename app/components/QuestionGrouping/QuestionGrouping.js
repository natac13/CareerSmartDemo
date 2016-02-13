import React, { PropTypes } from 'react';



import style from './style.scss';

const QuestionGrouping = ( {...props, questionBricks }) => {

    return(
        <div className={style.wrapper}>
            {questionBricks}
        </div>
    );
};

export default QuestionGrouping;