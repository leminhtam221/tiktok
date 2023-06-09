import React from 'react';
import classNames from 'classnames/bind';
import Header from '../components/Header';
import Sidebar from './Sidebar';
import styles from './index.module.scss';

const cx = classNames.bind(styles);

const DefaultLayout = ({ children }) => {
  return (
    <div className={cx('wrapper')}>
      <Header />
      <div className={cx('container')}>
        <Sidebar />
        <div className={cx('content')}>{children}</div>
      </div>
    </div>
  );
};

export default DefaultLayout;
