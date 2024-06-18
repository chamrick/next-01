import React from 'react';
import Image from 'next/image';
import styles from './SiteLogo.module.css';

const SiteLogo = () => {
  return (
    <div className={styles.sitenameWithLogo}>
      <Image className={styles.logoImage} src="/website-logo.png" width="50" height="50" alt="Logo" />
      <label className={styles.siteName}>Sitename With Logo</label>
    </div>
  );
};

export default SiteLogo;
