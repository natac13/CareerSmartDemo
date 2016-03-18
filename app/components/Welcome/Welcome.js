import React, { PropTypes } from 'react';

import { Button, IconButton } from 'react-toolbox/lib/button';
import Icon from 'react-fa';
import WhatWeDo from '../WhatWeDo/';
import Enticement from '../Enticement/';

import smoothScroll from 'smoothscroll';

import style from './style';

const Welcome = (props) => {
  function handleScroll() {
    smoothScroll(document.querySelector('#marker'), 1500);
  }

  return (
    <section className={ `${style.wrapper} ${props.className}` }>
      <div className={style.bar}>
        <Button
          className={style.owner}
          onClick={handleScroll}
          label="Your Career Coach"
          primary
        />
        <WhatWeDo className={style.whatWeDo} />
      </div>

      <Enticement />

      <div className={style.nav}>
        <IconButton
          className={style.chevronButton}
          onClick={handleScroll}
          icon={<Icon className={style.chevron} name="chevron-down" />}
          floating
        />
      </div>
      <div id="marker" />
    </section>
  );
};

Welcome.propTypes = {
  className: PropTypes.string,
};

export default Welcome;
