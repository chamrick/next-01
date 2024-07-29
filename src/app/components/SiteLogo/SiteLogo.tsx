import React from 'react';
import Image from 'next/image';
import styles from './SiteLogo.module.css';

const siteTitle: String = process.env.SITE_TITLE || 'Sitename With Logo';

const SiteLogo = () => {
  return (
    <div className={styles.sitenameWithLogo}>
      <Image className={styles.logoImage} src="/website-logo.png" width="50" height="50" alt="Logo" />
      <label className={styles.siteName}>{siteTitle}</label>
    </div>
  );
};

export default SiteLogo;
