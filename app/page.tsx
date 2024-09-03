"use client";

import Head from 'next/head';
import React, { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    // Your existing useEffect code
  }, []);

  return (
    <>
      <Head>
        <title>BrandForge - Innovative IT Solutions</title>
      </Head>
      <div>
        <h1>Welcome to BrandForge</h1>
      </div>
    </>
  );
}