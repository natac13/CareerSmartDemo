import React, { PropTypes } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import classnames from 'classnames';
import { withReducer, withProps, compose, pure } from 'recompose';
/** Third Party Components ***/
import Dialog from 'react-toolbox/lib/dialog';
import { Button, IconButton } from 'react-toolbox/lib/button';
import Icon from 'react-fa';

import reducer, {
  initialState,
  navOpen,
  navClose,
} from './reducer';

import {
  scrollCoach,
  scrollQuestions,
  scrollTop,
} from './scroll';

import style from './style.scss';
function NavButton(props) {
  const {
    navOpen,
    navClose,
    className,
    navButton,
    dispatch,
    scrollCoach,
    scrollQuestions,
    scrollTop
  } = props;
  const isOpen = navButton.get('isOpen');
  const wrapperClass = classnames({
    [className]: !!className,
    [style.wrapper]: true,
  });

  function handleCoach() {
    scrollCoach();
    navClose(dispatch, null);
  }
  function handleQuetions() {
    scrollQuestions();
    navClose(dispatch, null);
  }
  function handleTop() {
    scrollTop();
    navClose(dispatch, null);
  }
  return (
    <div className={wrapperClass}>
      <IconButton
        className={style.navBars}
        neutral={false}
        onClick={navOpen(dispatch)}
      >
        <Icon
          name={isOpen ? 'times-circle-o' : 'bars'}
        />
      </IconButton>
      <Dialog
        active={isOpen}
        onOverlayClick={navClose(dispatch)}
        className={style.dialog}
      >
        <Button
          flat
          label="Top"
          neutral={false}
          className={style.link}
          onClick={handleTop}
        />
        <Button
          flat
          label="WHO WE ARE"
          neutral={false}
          className={style.link}
          onClick={handleCoach}
        />
        <Button
          flat
          label="WHAT WE DO"
          neutral={false}
          className={style.link}
          onClick={handleQuetions}
        />
        <Button
          flat
          label="SERVICES"
          neutral={false}
          className={style.link}
          href="http://www.careersmarts.ca/career_services.php"
        />
        <Button
          flat
          label="CONTACT"
          neutral={false}
          className={style.link}
          href="http://www.careersmarts.ca/contact.php"
        />
      </Dialog>
    </div>

  );
}

NavButton.propTypes = {
  className: PropTypes.string,
  navOpen: PropTypes.func.isRequired,
  navClose: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired,
  navButton: ImmutablePropTypes.map.isRequired,
  scrollCoach: PropTypes.func.isRequired,
  scrollQuestions: PropTypes.func.isRequired,
};


export default compose(
  withReducer(
    'navButton',
    'dispatch',
    reducer,
    initialState,
  ),
  withProps({
    navOpen,
    navClose,
    scrollCoach,
    scrollQuestions,
    scrollTop,
  }),
  pure
)(NavButton);
