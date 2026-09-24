import Layout from "../components/Layout";
import Image from "next/image";
import { projectsData } from "../data/portfolio";
import styles from "./work.module.scss";

const Work = () => {
  return (
    <Layout title="Work" description="Featured projects and engineering work by Sifat Jasim.">
      <div className={styles.container}>
        <div className={styles.titleWrapper}>
          <span className={styles.codeTag}>{"<h1>"}</span>
          <h1 className={styles.title}>Featured Work</h1>
          <span className={styles.codeTag}>{"</h1>"}</span>
        </div>

        <div className={styles.projectsGrid}>
          {projectsData.map((project, index) => (
            <div key={project.title} className={styles.projectCard}>
              {project.image && (
                <div className={styles.imageWrapper}>
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    fill 
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
                    priority={index === 0}
                    style={{ objectFit: 'cover' , objectPosition: 'top' }}
                    className={styles.projectImage}
                  />
                </div>
              )}
              <div className={styles.projectInfo}>
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <div className={styles.techStack}>
                  {project.tech.map(t => <span key={t}>{t}</span>)}
                </div>
                {project.link && (
                  <a href={project.link} target="_blank" rel="noreferrer" className={styles.link}>
                    Visit Website &rarr;
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Work;
