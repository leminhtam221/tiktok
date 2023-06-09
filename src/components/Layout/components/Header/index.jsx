import React from 'react';
import classNames from 'classnames/bind';
import styles from './index.module.scss';

const cx = classNames.bind(styles);

const Header = () => {
  return (
    <header className={cx('wrapper')}>
      <h1 className={cx('inner')}>Header</h1>
    </header>
  );
};

export default Header;
