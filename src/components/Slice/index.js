import React from 'react';

import './styles.scss';

const Slice = ({
  backgroundUrl,
}) => {
  

  return (
    <div className='Slice'>
      {backgroundUrl && (
        <div
          style={{
            backgroundImage: backgroundUrl,
          }}
          className='Slice--background'
        />
      )}

      <div style={{ backgroundImage: `url(${backgroundUrl})`}}>
        
          <img src ={require(`public/images/higher-education/en/${backgroundUrl}`)} alt="hola"/>
        
      </div>
    </div>
  );
};
{//
}
Slice.defaultProps = {
  backgroundUrl: null,
};

export default Slice;
