import React, { PropTypes } from 'react';
import ImmuablePropTypes from 'react-immutable-proptypes';

import { Button, IconButton } from 'react-toolbox/lib/button';
import Icon from 'react-fa';
import Testimonials from '../Testimonials/';
import Enticement from '../Enticement/';

import smoothScroll from 'smoothscroll';

import style from './style';

const Welcome = (props) => {
  function handleScroll() {
    smoothScroll(document.querySelector('#marker'), 1500);
  }
  const {
    testimonialsOpen,
    testimonialsClose,
    testimonials,
  } = props;


  return (
    <section className={ `${style.wrapper} ${props.className}` }>

      <div className={style.bar}>
        {/*<h3 className={style.owner}>Lionel Desjardins</h3>*/}
        <Button
          className={style.owner}
          onClick={handleScroll}
          label="Lionel Desjardins"
          primary
        />
        <Testimonials
          className={style.testimonials}
          testimonials={testimonials}
          testimonialsOpen={testimonialsOpen}
          testimonialsClose={testimonialsClose}
        />
      </div>

      <Enticement />

      <div className={style.nav}>
        {/*<p className={style.message}>Ready for the Advantage?</p>*/}
          <IconButton
            className={style.chevronButton}
            onClick={handleScroll}
            icon={<Icon className={style.chevron} name="chevron-down" />}
            floating
          />
      </div>
      <div id="marker"></div>
    </section>
  );
};

Welcome.propTypes = {
  className: PropTypes.string,
  testimonialsOpen: PropTypes.func,
  testimonialsClose: PropTypes.func,
  testimonials: ImmuablePropTypes.map,
};

export default Welcome;
