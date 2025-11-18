import styles from "./Projects.module.scss";
import projects from "@/data/projects.json";

export default function Projects() {
  return (
    <div className={styles.grid}>
      {projects.map((project) => (
        <article key={project.id} className={`card ${styles.card}`}>
          <div className={styles.thumb} aria-hidden="true" />
          <div className={styles.meta}>
            <h3>{project.title}</h3>
            <p>{project.location}</p>
          </div>
        </article>
      ))}
    </div>
  );
}


