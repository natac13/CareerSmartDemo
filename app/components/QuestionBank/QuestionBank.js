import React, { PropTypes } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import classnames from 'classnames';
import { curry } from 'ramda';

import Icon from 'react-fa';

import style from './style';

function QuestionBank(props) {
  // curry the handleClick so that I can prime it with some arguments
  const handleClick = curry((isOpen, questionIndex, event) => {
    event.preventDefault();
    if (!isOpen) {
      props.openQuestion(questionIndex);
    } else {
      props.closeQuestion(questionIndex);
    }
  });
  // Style classes based off props
  const wrapperClass = classnames({
    [style.wrapper]: true,
    [props.className]: !!props.className, // would come from parent component
  });
  const baseClass = classnames({
    [style.questionWrapper]: true,
    [style.left]: props.side === 'left', // sides of the landing page
    [style.right]: props.side === 'right',
  });
  const answerClass = classnames({
    [style.answerLeft]: props.side === 'left',
    [style.answerRight]: props.side === 'right',
  });


  const questionWrappers = props.questions.map((question, index) => {
    // each question has a list of answers that go along with it
    const answers = question.get('answers').map((answer, i) => (
      <li className={style.answerItem} key={i}>{answer}</li>
    ));

    return (
      <div
        key={index}
        className={baseClass}
      >
        <div className={style.questionDiv}>
          <p className={style.question}>{question.get('question')}</p>
        </div>
        <div
          className={answerClass}
          onClick={handleClick(question.get('open'), index)}
        >
          <div className={style.pullTab}>
              <Icon name="question" />
          </div>
          <ul>
            {answers}
          </ul>
        </div>
      </div>
    );
  });
  // QuestionBank Component returned JSX
  return (
      <section className={wrapperClass}>
        {questionWrappers}
      </section>
  );
}

QuestionBank.propTypes = {
  side: PropTypes.oneOf(['left', 'right']).isRequired,
  className: PropTypes.string,
  openQuestion: PropTypes.func,
  closeQuestion: PropTypes.func,
  questions: ImmutablePropTypes.list,

};
export default QuestionBank;
