import React, { PropTypes } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ActionCreators from '../../actions';

import Header from '../../components/Header/';
import Welcome from '../../components/Welcome/';
import Engagement from '../../components/Engagement/';
import Profile from '../../components/Profile/';
import Testimonials from '../../components/Testimonials/';

/** My functions ***/
import {
  checkAnyOpen,
} from '../../js/core-questions';

import style from './style';

function App(props) {
  console.log(props)
  const {
  actions,
  questions,
  contact,
  testimonials,
  } = props;
  // contact form open booleans
  const isOpen = checkAnyOpen(questions);
  const isContactOpen = contact.get('isContactOpen');


  function closeAllQuestions() {
    return actions.closeAllQuestions(questions);
  }
  return (
    <div className={style.app}>
      <Header
        contactOpen={actions.contactOpen}
        testimonialsOpen={actions.testimonialsOpen}
      />
      <Welcome
        className={style.welcome}
      />
      <Engagement
        className={style.engagement}
        actions={actions}
        isOpen={isOpen || isContactOpen}
        closeAllQuestions={closeAllQuestions}
        questions={questions}
        contactClose={actions.contactClose}
      />
      <Profile />
      <Testimonials
        testimonialsClose={actions.testimonialsClose}
        isTestimonialsOpen={testimonials.get('isTestimonialsOpen')}
      />
    </div>
  );
}

App.propTypes = {
  actions: PropTypes.object,
  questions: ImmutablePropTypes.list,
  contact: ImmutablePropTypes.map,
  testimonials: ImmutablePropTypes.map,
};

function mapStateToProps(state) {
  return {
    questions: state.questions,
    contact: state.contact,
    testimonials: state.testimonials,
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
