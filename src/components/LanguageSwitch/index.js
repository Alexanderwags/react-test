import React from 'react';

import './styles.scss';

const getBasePath = (url) => {
  const path = url.split('/')
  path.pop()
  return path.join('/');
}

const LanguageSwitch = ({ lang, history }) => {
  const onClick = () => { window.location = `${getBasePath(history.location.pathname)}/${lang}` };
  return (
    <div className='navigation LanguageSwitch' onClick={onClick} tabIndex='0' role='button'>
      <span>
        {lang}
      </span>
    </div>
  );
};

export default LanguageSwitch;
