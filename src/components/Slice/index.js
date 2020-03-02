import React from 'react';

import './styles.scss';

const Slice = ({
  backgroundUrl,
}) => {
  
  console.log(backgroundUrl);
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
      <div style={{ backgroundImage: `url("window.location.origin +${backgroundUrl}")` }}>
     
     {
        // eslint-disable-next-line jsx-a11y/alt-text
        //  <img src={window.location.origin + `${backgroundUrl}` } /> 
        //<img src ={require(`${backgroundUrl}`).default} alt="hola"/>
        // <img src ={require(`/src/resources/images/higher-education/en/01.jpg`)} alt="hola"/>
     }       
     </div>

    </div>
  );
};

Slice.defaultProps = {
  backgroundUrl: null,
};

export default Slice;
