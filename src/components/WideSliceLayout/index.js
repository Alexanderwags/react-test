import React from 'react';

import './styles.scss';

const WideSliceLayout = ({ children, className }) => {
  return (
    <section className={`WideSliceLayout ${className}`}>
      {children}
    </section>
  );
};

WideSliceLayout.defaultProps = {
  className: '',
};

export default WideSliceLayout;
