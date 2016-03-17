import React, { PropTypes } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { withProps } from 'recompose';
import { fromJS } from 'immutable';
import classnames from 'classnames';

import profileData from './profile.json';

import style from './style.scss';

function Profile(props) {
  const wrapperClass = classnames({
    [style.wrapper]: true,
    [props.className]: !!props.className,
  });
  const name = props.profile.get('name');
  const paragraphs = props.profile.get('paragraphs');
  return (
    <div className={wrapperClass}>
      <img
        className={style.image}
        src={require('../../images/lionel.png')}
        alt={name}
      />

    </div>
  );
}

Profile.propTypes = {
  className: PropTypes.string,
  profile: ImmutablePropTypes.map,
};

export default withProps(
  { profile: fromJS(profileData) },
  Profile,
);
