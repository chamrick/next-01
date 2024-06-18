import React from 'react';
import type { Metadata } from "next";
import styles from './AboutPage.module.scss';

export const metadata: Metadata = {
  title: "Sitename - Albums",
};

export const AlbumsPage = async () => {
  return (
    <>
      <h1>Albums</h1>

    </>
  );
};

export default AlbumsPage;
