import React, { PropTypes } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { pure, defaultProps, compose } from 'recompose';
import { List } from 'immutable';

import { IconButton } from 'react-toolbox/lib/button';
import Drawer from 'react-toolbox/lib/drawer';
import Icon from 'react-fa';

import style from './style.scss';

function Testimonials(props) {
  const {
    className,
    testimonialsClose,
    isTestimonialsOpen,
    testimonialList,
  } = props;


  const testimonialsJSX = testimonialList
    .map((testimonial, i) => (
      <p key={i} className={style.testimonial}>{testimonial}</p>
      ));

  return (
    <div className={`${className} ${style.wrapper}`}>
      <Drawer
        active={isTestimonialsOpen}
        type={'left'}
        className={style.drawer}
        onOverlayClick={testimonialsClose}
      >
        <IconButton
          className={style.drawerClose}
          onClick={testimonialsClose}
          icon={<Icon name="close" />}
          floating
        />
        {testimonialsJSX}
      </Drawer>
    </div>
  );
}

Testimonials.propTypes = {
  className: PropTypes.string,
  testimonialsClose: PropTypes.func.isRequired,
  isTestimonialsOpen: PropTypes.bool.isRequired,
  testimonialList: ImmutablePropTypes.list.isRequired,
};

export default compose(
  defaultProps({
    testimonialList: List(require('./testimonials.json')),
  }),
  pure
)(Testimonials);
