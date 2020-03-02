import React from 'react';
import useReveral from 'hooks/useReveral';

// eslint-disable-next-line import/prefer-default-export
const ReveralSetup = ({ children }) => {
  const { loading } = useReveral();
  return (
    <>
      {loading && <div>Loading...</div>}
      {children}
    </>
  );
};

export default ReveralSetup;
