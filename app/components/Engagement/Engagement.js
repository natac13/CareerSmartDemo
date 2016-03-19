import React, { PropTypes } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import classnames from 'classnames';

import QuestionBank from '../QuestionBank/';
import ContactForm from '../ContactForm/';

import style from './style.scss';

function Engagement(props) {
  const {
    actions,
    questions,
    isOpen,
    closeAllQuestions,
    className,
    contactClose,
  } = props;

  const wrapperClass = classnames({
    [style.engagement]: true,
    [className]: !! className,
  });
  return (
    <div className={wrapperClass} id="questions">
      <QuestionBank
        side="left"
        openQuestion={actions.openQuestion}
        closeQuestion={actions.closeQuestion}
        questions={questions.take(3)}
      />
      <QuestionBank
        side="right"
        openQuestion={actions.openQuestion}
        closeQuestion={actions.closeQuestion}
        questions={questions.takeLast(3)}
      />
      <ContactForm
        addUser={actions.addUser}
        isOpen={isOpen}
        closeAllQuestions={closeAllQuestions}
        contactClose={contactClose}
      />
    </div>
  );
}

Engagement.propTypes = {
  className: PropTypes.string,
  actions: PropTypes.object.isRequired,
  questions: ImmutablePropTypes.list.isRequired,
  isOpen: PropTypes.bool.isRequired,
  closeAllQuestions: PropTypes.func.isRequired,
};

export default Engagement;
