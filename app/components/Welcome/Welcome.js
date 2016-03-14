import React, { PropTypes } from 'react';
import ImmuablePropTypes from 'react-immutable-proptypes';

import { IconButton } from 'react-toolbox';
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
        <h3 className={style.owner}>Lionel Desjardins</h3>
        <Testimonials
          className={style.testimonials}
          testimonials={testimonials}
          testimonialsOpen={testimonialsOpen}
          testimonialsClose={testimonialsClose}
        />
      </div>

      <Enticement />

      {/*<header className={style.heading}>
        <h1 className={style.title}>Career Smarts</h1>
      </header>*/}

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
