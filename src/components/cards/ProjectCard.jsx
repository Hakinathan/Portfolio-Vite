import PropTypes from "prop-types";
import { PiShareFill } from "react-icons/pi";
import { FiGithub } from "react-icons/fi";

import styles from "./ProjectCard.module.css";

function ProjectCard({ title, description, image, link, tags, github }) {
  return (
    <div>
      <img
        src={image}
        alt={`Project ${title} image`}
        className={styles.image}
        type="image/webp"
        width={960}
        height={720}
      />
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <div className={styles.links}>
          <a
            href={link}
            className={styles.link}
            aria-label="Voir le projet dans un nouvel onglet"
          >
            <PiShareFill />
          </a>
          <a
            href={github}
            className={styles.link}
            aria-label="Voir le code source sur Github"
          >
            <FiGithub />
          </a>
        </div>
        <div className={styles.tags}>
          {tags.map((tag) => (
            <span key={tag} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.any.isRequired,
  link: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ProjectCard;
