import Link from "next/link";
import SEO from "../components/SEO";

const NotFound = () => (
  <>
    <SEO title="Page not found" description="This page doesn't exist." />
    <main style={{ maxWidth: "44rem", margin: "0 auto", padding: "6rem 1.25rem" }}>
      <p style={{ color: "var(--grey)", fontSize: "0.85rem", letterSpacing: "0.06em", textTransform: "uppercase" }}>404</p>
      <h1 style={{ fontFamily: "Georgia, serif", fontWeight: 400, fontSize: "2rem", margin: "1rem 0" }}>
        This page doesn&apos;t exist.
      </h1>
      <p>
        <Link href="/" style={{ color: "var(--palegold)" }}>
          Go to the home page
        </Link>
      </p>
    </main>
  </>
);

export default NotFound;
