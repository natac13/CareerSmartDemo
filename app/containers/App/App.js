import React, { Component }   from 'react';
import { connect }            from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ActionCreators    from '../../actions';

import ContactForm      from '../../components/ContactForm/';
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
    const {
      actions,
      questions
    } = this.props;
    return (
      <div className={style.app}>
        <Header />
        <Welcome className={style.welcome}/>
        <div className={style.engagement}>
          <QuestionBank
            side="left"
            className={style.leftSide}
            open={actions.open}
            close={actions.close}
            {...this.props}
            questions={questions.take(3)} />
          <QuestionBank
            side="right"
            className={style.rightSide}
            open={actions.open}
            close={actions.close}
            {...this.props}
            questions={questions.takeLast(3)} />


          <ContactForm
              questions={questions}
              closeAll={actions.closeAll} />

        </div>

      </div>
    );
  }
}

/*========================================
=            Redux connection            =
========================================*/

function mapStateToProps(state) {
  const questions = state.questions;
  return {
    questions
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