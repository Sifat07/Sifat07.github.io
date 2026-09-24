import Head from "next/head";
import React from "react";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  url?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = "Sifat Jasim | Full-Stack Developer",
  description = "Full-Stack Developer specializing in React, Next.js, and modern web architectures. Portfolio of Sifat Jasim.",
  keywords = "Sifat Jasim, Portfolio, Full-Stack Developer, React, Next.js, TypeScript, Node.js",
  ogImage = "/og-image.png",
  url = "https://sifat07.github.io",
}) => {
  const fullTitle = title.includes("Sifat") ? title : `${title} | Sifat Jasim`;
  // Link previews (Open Graph, Twitter) need an absolute image URL.
  const ogImageUrl = ogImage.startsWith("http") ? ogImage : `${url}${ogImage}`;

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImageUrl} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImageUrl} />

      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default SEO;
