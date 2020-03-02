import React from 'react';
import ReveralSetup from 'components/ReveralSetup';
import WideSliceLayout from 'components/WideSliceLayout';
import Slice from 'components/Slice';
import LanguageSwitch from 'components/LanguageSwitch';
import Navigation from 'components/Navigation';

import 'resources/css/reveal.css';
import 'resources/css/themes/black.css';

import { slices } from './slicesConfig.json';

const Home = ({
  match,
  history
}) => {
  let { lang } = match.params;
  lang = lang.toLowerCase();
  return (
    <ReveralSetup>
      <div className='reveal'>
        <div className='slides'>
          {((slices[lang] || [])).map(item => (
            <WideSliceLayout key={`url("${item.uri}${item.filename}")`}>
              <Slice backgroundUrl={`url("${item.uri}${item.filename}")`} />
            </WideSliceLayout>
          ))}
          <Navigation />
          <LanguageSwitch history={history} lang={lang === 'fr' ? 'en' : 'fr'} />
        </div>
      </div>
    </ReveralSetup>
  );
};

export default Home;
