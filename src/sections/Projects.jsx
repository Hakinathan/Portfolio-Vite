import ProjectCard from "../components/cards/ProjectCard";
import Codamate from "../assets/img/codamate.webp";

import styles from "./Projects.module.css";

const projects = [
  {
    title: "CodaMate",
    description:
      "Un site vitrine pour les sessions de rattrapage en Java/Javascript que je donne",
    image: Codamate,
    link: "https://codamate.nathan-lemoine.be",
    github: "https://github.com/Hakinathan/CodaMate",
    tags: ["HTML", "CSS", "Vite", "React"],
  },
];

function Projects() {
  return (
    <section id="creations">
      <link
        rel="preload"
        as="image"
        imageSrcSet={projects.map((project) => project.image).join(",")}
        type="image/webp"
      />
      <div className={styles.content}>
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            image={project.image}
            link={project.link}
            tags={project.tags}
            github={project.github}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
