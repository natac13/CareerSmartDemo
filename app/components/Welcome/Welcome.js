import React, { PropTypes } from 'react';

import { IconButton } from 'react-toolbox';
import Icon from 'react-fa';
import { Button, Element } from 'react-scroll';

import smoothScroll from 'smoothscroll';

import style from './style';

const Welcome = (props) => {
  return (
    <section className={ `${style.wrapper} ${props.className}` }>

      <header className={style.heading}>
        <h1 className={style.title}>Career Smarts</h1>
      </header>

      <h3 className={style.owner}>Lionel Desjardins</h3>

      <div className={style.nav}>
        <p className={style.message}>Ready for the Advantage?</p>
        {/*<Button*/}
          {/*to="next"*/}
          {/*smooth={true}*/}
          {/*offset={0}*/}
          {/*duration={723} >*/}
            <IconButton
              className={style.chevronButton}
              onClick={() => {
                console.log(document.querySelector('#marker'));
                smoothScroll(document.querySelector('#marker'), 1500);
              }}
              icon={<Icon className={style.chevron} name="chevron-down" />}
              floating/>

          {/*</Button>*/}
      </div>

      {/*<Element name="next" className={style.next} ></Element>*/}
      <div id="marker"></div>
    </section>
  );
};

export default Welcome;