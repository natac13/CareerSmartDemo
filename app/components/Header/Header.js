import React, { PropTypes }from 'react';
import FontAwesome from 'react-fontawesome';

import style from './style.scss';

const Header = (props) => {
    return (
        <header className={style.wrapper}>
            <img
                className={style.logo}
                src={require('../../images/careers_logo.png')}
                alt="CareerSmarts Logo" />
            <h3 className={style.tagLine}>
                Looking for a fresh Career Start? Contact CareerSmarts!
            </h3>
            <div className={style.socials}>
                <a href="#" className={style.social}>
                    <FontAwesome name="twitter-square" />
                </a>
                <a href="#" className={style.social}>
                    <FontAwesome name="linkedin-square" />
                </a>
                <a href="#" className={style.social}>
                    <FontAwesome name="skype" />
                </a>
                <a href="#" className={style.social}>
                    <FontAwesome name="envelope" />
                </a>

            </div>
        </header>
    );
};

export default Header;