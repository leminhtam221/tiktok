import React from 'react';
import Header from '../components/Header';

const HeaderOnlyLayout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default HeaderOnlyLayout;
