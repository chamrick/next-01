import React from 'react';
import type { Metadata } from "next";
import styles from './AboutPage.module.scss';

export const metadata: Metadata = {
  title: "Sitename - Staff",
};

export const StaffPage = async () => {
  return (
    <>
      <h1>Staff</h1>

    </>
  );
};

export default StaffPage;
