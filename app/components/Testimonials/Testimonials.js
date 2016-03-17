import React, { PropTypes } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { withReducer } from 'recompose';

import { Button, IconButton } from 'react-toolbox/lib/button';
import Drawer from 'react-toolbox/lib/drawer';
import Icon from 'react-fa';

import reducer, {
  initialState,
  testimonialsClose,
  testimonialsOpen,
} from './reducer';
import style from './style.scss';

function Testimonials(props) {
  const {
    className,
    testimonials,
    dispatch,
  } = props;

  const testimonialList = testimonials.get('testimonials');
  const isTestimonialsOpen = testimonials.get('isTestimonialsOpen');

  const testimonialsJSX = testimonialList
    .map((testimonial, i) => (
      <p key={i} className={style.testimonial}>{testimonial}</p>
      ));

  return (
    <div className={`${className} ${style.wrapper}`}>
      <Button
        className={style.showTestimonials}
        label="Real Testimonials"
        onClick={testimonialsOpen(dispatch)}
        primary
      />


      <Drawer
        active={isTestimonialsOpen}
        type={'right'}
        className={style.drawer}
        onOverlayClick={testimonialsClose(dispatch)}
      >
        <IconButton
          className={style.drawerClose}
          onClick={testimonialsClose(dispatch)}
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
  dispatch: PropTypes.func,
  testimonials: ImmutablePropTypes.map,
};

export default withReducer(
  'testimonials',
  'dispatch',
  reducer,
  initialState,
  Testimonials,
);
