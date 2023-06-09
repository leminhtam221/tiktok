import React from 'react';
import Header from '../components/Header';
import Sidebar from './Sidebar';

const DefaultLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <div>
        <Sidebar />
        {children}
      </div>
    </div>
  );
};

export default DefaultLayout;
