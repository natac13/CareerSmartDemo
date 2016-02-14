import React, { PropTypes }from 'react';
/*** Third Party Components ***/
import Icon from 'react-fa';

/*** My Components ***/
import NavButton from '../NavButton/';

import style from './style.scss';

const Header = (props) => {
    return (
        <header className={style.wrapper}>
            <img
                className={style.logo}
                src={require('../../images/careers_logo.png')}
                alt="CareerSmarts Logo" />
            <h3 className={style.tagLine}>
                Looking for a fullfilling Career? Take the CareerSmarts Advantage!
            </h3>
{/*            <div className={style.socials}>
                <a href="#" className={style.social}>
                    <Icon name="twitter-square" />
                </a>
                <a href="#" className={style.social}>
                    <Icon name="linkedin-square" />

                </a>
                <a href="#" className={style.social}>
                    <Icon name="skype" />
                </a>
                <a href="#" className={style.social}>
                    <Icon name="envelope-square" />

                </a>

            </div>*/}
            <div className={style.navButton} >
                <NavButton />

            </div>
        </header>
    );
};

export default Header;