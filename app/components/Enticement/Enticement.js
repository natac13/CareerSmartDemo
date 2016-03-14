import React, { PropTypes } from 'react';
import { defaultProps } from 'recompose';


import style from './style.scss';

function Enticement(props) {
  const enticements = props.enticements.map((enticement, i) => (
    <p key={i} className={style.enticement}>{enticement}</p>
  ));
  return (
    <div className={`${props.className} ${style.wrapper}`}>
        {enticements}
    </div>
  );
}

Enticement.propTypes = {
  className: PropTypes.string,
  enticements: PropTypes.array,
};
export default defaultProps(
  { enticements: require('./enticements.json') },
  Enticement
);
