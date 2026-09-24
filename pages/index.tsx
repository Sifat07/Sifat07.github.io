import type { GetStaticProps } from "next";
import SEO from "../components/SEO";
import { earlier, links, method, profile, RESUME_PDF, work } from "../data/site";
import { loadResumeHtml } from "../lib/resume.mjs";
import styles from "./index.module.scss";

interface HomeProps {
  resumeHtml: string;
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => ({
  props: { resumeHtml: loadResumeHtml() },
});

const Home = ({ resumeHtml }: HomeProps) => {
  return (
    <>
      <SEO />
      <div className={styles.page}>
        <header className={styles.top}>
          <a href="#top" className={styles.mark} aria-label="Sifat Jasim, back to top">
            SJ
          </a>
          <nav className={styles.nav} aria-label="Sections">
            <a href="#work">Work</a>
            <a href="#resume">Résumé</a>
            <a href="#contact">Contact</a>
          </nav>
        </header>

        <main id="top">
          <section className={styles.hero}>
            <p className={styles.eyebrow}>{profile.eyebrow}</p>
            <h1 className={styles.headline}>{profile.headline}</h1>
            <p className={styles.intro}>{profile.intro}</p>
            <p className={styles.linkRow}>
              {links.map((l) => (
                <a key={l.label} href={l.href} target={l.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                  {l.text}
                </a>
              ))}
            </p>
          </section>

          <section className={styles.section} aria-labelledby="how">
            <h2 id="how" className={styles.label}>How I work</h2>
            <div className={styles.prose}>
              {method.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </section>

          <section id="work" className={styles.section} aria-labelledby="work-title">
            <h2 id="work-title" className={styles.label}>Selected work</h2>
            <ul className={styles.work}>
              {work.map((w) => (
                <li key={w.org}>
                  <div className={styles.workHead}>
                    <span className={styles.workOrg}>
                      {w.href ? (
                        <a href={w.href} target="_blank" rel="noreferrer">
                          {w.org}
                        </a>
                      ) : (
                        w.org
                      )}
                    </span>
                    <span className={styles.workWhen}>{w.when}</span>
                  </div>
                  <div className={styles.workRole}>{w.role}</div>
                  <p className={styles.workNote}>{w.note}</p>
                </li>
              ))}
            </ul>
            <p className={styles.earlier}>{earlier}</p>
          </section>

          <section id="resume" className={styles.section} aria-labelledby="resume-title">
            <h2 id="resume-title" className={styles.label}>Full résumé</h2>
            <p className={styles.downloads}>
              <a href={RESUME_PDF} target="_blank" rel="noreferrer">
                Download PDF
              </a>
            </p>
            <details className={styles.cvToggle}>
              <summary>Read the full résumé</summary>
              <div className={styles.cv} dangerouslySetInnerHTML={{ __html: resumeHtml }} />
            </details>
          </section>

          <section id="contact" className={styles.section} aria-labelledby="contact-title">
            <h2 id="contact-title" className={styles.label}>Contact</h2>
            <p className={styles.contactLine}>Email is the surest way to reach me.</p>
            <p className={styles.linkRow}>
              {links.map((l) => (
                <a key={l.label} href={l.href} target={l.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                  {l.text}
                </a>
              ))}
            </p>
          </section>
        </main>

        <footer className={styles.colophon}>
          <p>
            {profile.name} · Built with Next.js as a static export, hosted on GitHub Pages ·{" "}
            <a href="https://github.com/Sifat07/Sifat07.github.io" target="_blank" rel="noreferrer">
              Source
            </a>
          </p>
        </footer>
      </div>
    </>
  );
};

export default Home;
