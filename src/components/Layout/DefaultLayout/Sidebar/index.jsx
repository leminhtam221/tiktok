import React from 'react';
import classNames from 'classnames/bind';
import styles from './index.module.scss';

const cx = classNames.bind(styles);

const Sidebar = () => {
  return (
    <aside className={cx('wrapper')}>
      <h2>Side bar</h2>
    </aside>
  );
};

export default Sidebar;
