import React, { PropTypes } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { withProps } from 'recompose';
import { fromJS } from 'immutable';
import classnames from 'classnames';

import { IconButton } from 'react-toolbox/lib/button';
import Icon from 'react-fa';

import profileData from './profile.json';

import style from './style.scss';

function Profile(props) {
  const wrapperClass = classnames({
    [style.wrapper]: true,
    [props.className]: !!props.className,
  });
  const name = props.profile.get('name');
  const credentials = props.profile.get('credentials');
  const paragraphs = props.profile.get('paragraphs');
  const linkedInUrl = props.profile.get('linkedIn');
  return (
    <div className={wrapperClass} id="coach">
      <p className={style.intro}>Your Career Coach</p>
      <h1 className={style.name}>{name}</h1>
      <h3 className={style.credentials}>{credentials}</h3>
      <div className={style.avatar}>
        <img
          className={style.image}
          src={require('../../images/lionel.png')}
          alt={name}
        />
        <div className={style.socails}>
          <IconButton
            icon={<Icon name="linkedin" />}
            href={linkedInUrl}
          />
        </div>
      </div>
      <div className={style.bio}>
        {paragraphs.map((paragraph, i) => (
          <p className={style.paragraph} key={i}>{paragraph}</p>
        ))}
      </div>
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
