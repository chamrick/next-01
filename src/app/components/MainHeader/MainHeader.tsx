import React from 'react';
import SiteLogo from '../SiteLogo/SiteLogo';
import MainNavbar from '../MainNavbar/MainNavbar';
import styles from './MainHeader.module.css';

const MainHeader = () => {
  return (
    <header className={styles.mainHeader}>
      <div className={styles.headerContent}>
        <SiteLogo />
        <MainNavbar />
      </div>
    </header>
  );
};

export default MainHeader;
