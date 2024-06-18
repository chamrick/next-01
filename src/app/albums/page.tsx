import React from 'react';
import type { Metadata } from "next";

import AlbumsDisplay from '../components/AlbumsDisplay/AlbumsDisplay';

export const metadata: Metadata = {
  title: "Sitename - Albums",
};

export const AlbumsPage = async () => {
  return (
    <>
      <h1>Albums</h1>
      <AlbumsDisplay />
    </>
  );
};

export default AlbumsPage;
