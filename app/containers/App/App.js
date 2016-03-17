import React, { PropTypes } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ActionCreators from '../../actions';

import ContactForm from '../../components/ContactForm/';
import Header from '../../components/Header/';
import Welcome from '../../components/Welcome/';
import QuestionBank from '../../components/QuestionBank/';
import Profile from '../../components/Profile';


import style from './style';

function App(props) {
  const {
  actions,
  questions,
  testimonials,
  } = props;
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
          {...props}
          questions={questions.take(3)}
        />
        <QuestionBank
          side="right"
          className={style.rightSide}
          open={actions.open}
          close={actions.close}
          {...props}
          questions={questions.takeLast(3)}
        />


        <ContactForm
          questions={questions}
          closeAll={actions.closeAll}
        />

      </div>
      <Profile />

    </div>
  );
}

App.propTypes = {
  testimonials: ImmutablePropTypes.map,
  actions: PropTypes.object,
  questions: ImmutablePropTypes.list,
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
