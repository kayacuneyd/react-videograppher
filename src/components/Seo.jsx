import React from 'react';
import { HelmetProvider } from 'react-helmet-async';

function Seo ({ title, description, type, name }) {
  return (
    <HelmetProvider>
      <title>{description}</title>
      <meta name="description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta name="twitter:creator" content={name} />
      <meta name="twitter:card" content={type} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </HelmetProvider>
  );
};

export default Seo;
