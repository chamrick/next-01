import React from 'react';
import styles from './MainFooter.module.scss';

const MainFooter = () => {
  return (
    <footer className={styles.mainFooter}>
      <div className={styles.footerContent}>
        All Content Copyright ©2024, SitenameWithLogo.com<br />
        All Rights Reserved.
      </div>
    </footer>
  );
};

export default MainFooter;
