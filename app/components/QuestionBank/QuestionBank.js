import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

import style from './style';

class QuestionBank extends Component {
  constructor(props) {
    super(props);
    // prop.side = left/right String
    // props.questions
    // props.answers
    // props.both
  }

  render() {
    const baseClass = classnames({
      [`${style.questionWrapper}`]: true,
      [`${style.left}`]: this.props.side === 'left',
      [`${style.right}`]: this.props.side === 'right'
    });
    console.log(this.props);
    const wrapperClass = classnames({
      [`${style.wrapper}`]: true,
      [`${this.props.className}`]: !!this.props.className
    });

    const answerClass = classnames({
      [`${style.answerLeft}`]: this.props.side === 'left',
      [`${style.answerRight}`]: this.props.side === 'right'
    });

    return (
        <section className={wrapperClass}>
          <div className={baseClass}>
            <p className={style.question}> The question</p>
            <p className={answerClass}> answer</p>
          </div>
          <div className={baseClass}>
            <p className={style.question}> The question</p>
            <p className={answerClass}> answer</p>
          </div>
          <div className={baseClass}>
            <p className={style.question}> The question</p>
            <p className={answerClass}> answer</p>
          </div>
        </section>
    );
  }
}

export default QuestionBank;