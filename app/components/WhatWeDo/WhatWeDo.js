import React, { PropTypes } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { withReducer } from 'recompose';
import { curry } from 'ramda';

import { Button, IconButton } from 'react-toolbox/lib/button';
import Drawer from 'react-toolbox/lib/drawer';
import Icon from 'react-fa';

import reducer, {
  initialState,
  whatWeDoClose,
  whatWeDoOpen,
} from './reducer';
import style from './style.scss';

function WhatWeDo(props) {
  const {
    className,
    dispatch,
    whatWeDo,
  } = props;

  const whatWeDoList = whatWeDo.get('whatWeDo');
  const isWhatWeDoOpen = whatWeDo.get('isWhatWeDoOpen');

  const whatWeDoJSX = whatWeDoList
    .map((statement, i) => (
      <p key={i} className={style.statement}>{statement}</p>
      ));


  return (
    <div className={`${className} ${style.wrapper}`}>
      <Button
        className={style.showWhatWeDo}
        label="What We Do"
        onClick={whatWeDoOpen(dispatch)}
        primary
      />
      <Drawer
        active={isWhatWeDoOpen}
        type={'right'}
        className={style.drawer}
        onOverlayClick={whatWeDoClose(dispatch)}
      >
        <IconButton
          className={style.drawerClose}
          onClick={whatWeDoClose(dispatch)}
          icon={<Icon name="close" />}
          floating
        />
        {whatWeDoJSX}
      </Drawer>
    </div>
  );
}

WhatWeDo.propTypes = {
  className: PropTypes.string,
  dispatch: PropTypes.func,
  whatWeDo: ImmutablePropTypes.map,
};

export default withReducer(
  'whatWeDo',
  'dispatch',
  reducer,
  initialState,
  WhatWeDo,
);
