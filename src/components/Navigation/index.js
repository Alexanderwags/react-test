/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Logo2019 from 'components/Logo2019';
import IconNext from 'components/IconNext';
import IconPrev from 'components/IconPrev';

import './styles.scss';

const Navigation = () => {
  return (
    <div className='Navigation'>
      <a href='#' className='navigate-arrow navigate-right enabled'>
        <IconNext width={25} height={24} />
      </a>
      <a href='#/0' className='navigate-to-start'>
        <Logo2019 />
      </a>
      <a href='#' className='navigate-arrow navigate-left enabled'>
        <IconPrev width={25} height={24} />
      </a>
    </div>
  );
};

export default Navigation;
