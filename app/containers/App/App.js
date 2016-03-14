import React, { Component, PropTypes } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ActionCreators from '../../actions';

import ContactForm from '../../components/ContactForm/';
import Header from '../../components/Header/';
import Welcome from '../../components/Welcome/';
import QuestionBank from '../../components/QuestionBank/';


import style from './style';

class App extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    const {
    actions,
    questions,
    testimonials,
    } = this.props;
    return (
      <div className={style.app}>
        <Header />
        <Welcome
          className={style.welcome}
          testimonials={testimonials}
          testimonialsOpen={actions.testimonialsOpen}
          testimonialsClose={actions.testimonialsClose}
        />
        <div className={style.engagement}>
          <QuestionBank
            side="left"
            className={style.leftSide}
            open={actions.open}
            close={actions.close}
            {...this.props}
            questions={questions.take(3)}
          />
          <QuestionBank
            side="right"
            className={style.rightSide}
            open={actions.open}
            close={actions.close}
            {...this.props}
            questions={questions.takeLast(3)}
          />


          <ContactForm
            questions={questions}
            closeAll={actions.closeAll}
          />

        </div>

      </div>
    );
  }
}

App.propTypes = {
  testimonials: ImmutablePropTypes.map,
  actions: PropTypes.object,
  questions: ImmutablePropTypes.map,
};

function mapStateToProps(state) {
  const {
    questions,
    testimonials,
  } = state;
  return {
    questions,
    testimonials,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(ActionCreators, dispatch),
    dispatch,
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
