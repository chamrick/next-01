import React from 'react';
import type { Metadata } from "next";
import styles from './AboutPage.module.scss';

export const metadata: Metadata = {
  title: "Sitename - About",
};

export const AboutPage = async () => {
  return (
    <>
      <h1>About</h1>

    </>
  );
};

export default AboutPage;
