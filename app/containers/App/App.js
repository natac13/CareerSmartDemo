import React, { PropTypes } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ActionCreators from '../../actions';

import Header from '../../components/Header/';
import Welcome from '../../components/Welcome/';
import Engagement from '../../components/Engagement/';
import Profile from '../../components/Profile';

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
  } = props;
  const isOpen = checkAnyOpen(questions);
  const contactOpen = contact.get('contactOpen');

  function closeAllQuestions() {
    return actions.closeAllQuestions(questions);
  }
  return (
    <div className={style.app}>
      <Header
        contactOpen={actions.contactOpen}
      />
      <Welcome
        className={style.welcome}
      />
      <Engagement
        className={style.engagement}
        actions={actions}
        isOpen={isOpen || contactOpen}
        closeAllQuestions={closeAllQuestions}
        questions={questions}
        contactClose={actions.contactClose}
      />
      <Profile />
    </div>
  );
}

App.propTypes = {
  actions: PropTypes.object,
  questions: ImmutablePropTypes.list,
  contact: ImmutablePropTypes.map,
};

function mapStateToProps(state) {
  const {
    questions,
    contact,
  } = state;
  return {
    questions,
    contact,
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
