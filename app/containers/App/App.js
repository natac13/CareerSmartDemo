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
  const {
  actions,
  questions,
  } = props;
  const isOpen = checkAnyOpen(questions);

  function closeAllQuestions() {
    return actions.closeAllQuestions(questions);
  }
  return (
    <div className={style.app}>
      <Header />
      <Welcome
        className={style.welcome}
      />
      <Engagement
        className={style.engagement}
        actions={actions}
        isOpen={isOpen}
        closeAllQuestions={closeAllQuestions}
        questions={questions}
      />
      <Profile />
    </div>
  );
}

App.propTypes = {
  actions: PropTypes.object,
  questions: ImmutablePropTypes.list,
};

function mapStateToProps(state) {
  const {
    questions,
  } = state;
  return {
    questions,
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
