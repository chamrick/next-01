import React from 'react';
import styles from './MainNavbar.module.css';

const MainNavbar = () => {
  return (
    <nav className={styles.navWrap}>
      <ul className={styles.navList}>
        <li><a href="/">Home</a></li>
        <li><a href="/albums">Albums</a></li>
        <li><a href="/posts">Posts</a></li>
        <li><a href="/staff">Staff</a></li>
        <li><a href="/about">About</a></li>
      </ul>
    </nav>
  );
};

export default MainNavbar;
