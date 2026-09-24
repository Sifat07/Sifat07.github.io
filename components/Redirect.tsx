import Head from "next/head";

// The site is one page now. Old routes (/work, /about, /contact) stay as tiny
// pages that forward to the matching section, so existing links keep working
// on a static host with no server-side redirects.
const Redirect = ({ to }: { to: string }) => (
  <>
    <Head>
      <title>Sifat Jasim</title>
      <meta httpEquiv="refresh" content={`0; url=${to}`} />
      <link rel="canonical" href={`https://sifat07.github.io${to}`} />
      <meta name="robots" content="noindex" />
    </Head>
    <p style={{ padding: "2rem 1.25rem" }}>
      This page moved. <a href={to}>Continue to sifat07.github.io{to}</a>
    </p>
  </>
);

export default Redirect;
