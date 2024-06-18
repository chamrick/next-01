import React from 'react';
import type { Metadata } from "next";
import styles from './AboutPage.module.scss';

export const metadata: Metadata = {
  title: "Sitename - Posts",
};

export const PostsPage = async () => {
  return (
    <>
      <h1>Posts</h1>

    </>
  );
};

export default PostsPage;
