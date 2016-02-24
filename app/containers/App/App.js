import React, { Component }   from 'react';
import { connect }            from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ActionCreators    from '../../actions';

// import ContactForm      from '../../components/ContactForm/';
import QuestionBrick    from '../../components/QuestionBrick/';
import QuestionGrouping from '../../components/QuestionGrouping/';
import Header           from '../../components/Header/';
import Welcome          from '../../components/Welcome/';
import QuestionBank     from '../../components/QuestionBank/';


import style from './style';

class App extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    const questions = this.props.questionAnswers.get('questions').map((question, index) => {
      return (
        <QuestionBrick
          key={index}
          index={index}
          question={question.get('question')}
          answers={question.get('answers')}
          open={question.get('open')}
          openAnswers={this.props.actions.openAnswers}
          closeAnswers={this.props.actions.closeAnswers} />
      );
    });
    return (
      <div className={style.app}>
        <Header />
        <Welcome className={style.welcome}/>
        <div className={style.engagement}>
          <QuestionBank side="left" className={style.leftSide}/>
          <QuestionBank side="right" className={style.rightSide}/>

          {/*<QuestionGrouping
            questionBricks={ questions.take(3) } />
          <ContactForm
              questionsMap={this.props.questionAnswers.get('questions')} />
          <QuestionGrouping
            questionBricks={ questions.takeLast(3) } />
*/}
        </div>

      </div>
    );
  }
}

/*========================================
=            Redux connection            =
========================================*/

function mapStateToProps(state) {
  const questionAnswers = state.questionAnswers;
  return {
    questionAnswers
    };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(ActionCreators, dispatch),
    dispatch
    };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

/*=====  End of Redux connection  ======*/