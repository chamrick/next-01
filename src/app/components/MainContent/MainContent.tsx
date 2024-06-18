import React from 'react';
import styles from './MainContent.module.scss';

export default function MainContent({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className={styles.mainContent}>
      {children}
    </main>
  );
}
