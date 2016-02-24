import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

import style from './style';

class QuestionBank extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {

    const baseClass = classnames({
      [`${style.questionWrapper}`]: true,
      [`${style.left}`]: this.props.side === 'left',
      [`${style.right}`]: this.props.side === 'right'
    });
    const wrapperClass = classnames({
      [`${style.wrapper}`]: true,
      [`${this.props.className}`]: !!this.props.className
    });

    const answerClass = classnames({
      [`${style.answerLeft}`]: this.props.side === 'left',
      [`${style.answerRight}`]: this.props.side === 'right'
    });

    const questionWrappers = this.props.questions.map((question, index) => {
      console.log(question)
      const answers = question.get('answers').map((answer, i) => {
        return (<li key={i}>{answer}</li>);
      });
      return (
        <div
          key={index}
          className={baseClass}>
            <div className={style.questionDiv}>
              <p className={style.question}>{question.get('question')}</p>
            </div>
            <ul
              className={answerClass}
              onTouchTap={()=> {/*handle opening*/}}>{answers}</ul>
        </div>
      );
    });
    console.log(questionWrappers)

    return (
        <section className={wrapperClass}>
          {questionWrappers}
        </section>
    );
  }
}

QuestionBank.propTypes = {
  side: PropTypes.oneOf(['left', 'right']).isRequired,
  className: PropTypes.string,

};
export default QuestionBank;