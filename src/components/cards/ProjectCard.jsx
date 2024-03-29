import PropTypes from "prop-types";
import { PiShareFill } from "react-icons/pi";
import { FiGithub } from "react-icons/fi";

function ProjectCard({ title, description, image, link, tags, github }) {
  return (
    <div className="project-card">
      <img
        src={image}
        alt={`Project ${title} image`}
        className="project-card__image"
        type="image/webp"
        width={960}
        height={720}
      />
      <div className="project-card__content flex flex--column">
        <h3 className="project-card__title">{title}</h3>
        <p className="project-card__description">{description}</p>
        <div className="flex flex--between">
          <a
            href={link}
            className="project-card__link"
            aria-label="Voir le projet dans un nouvel onglet"
          >
            <PiShareFill />
          </a>
          <a
            href={github}
            className="project-card__link"
            aria-label="Voir le code source sur Github"
          >
            <FiGithub />
          </a>
        </div>
        <div className="project-card__tags flex">
          {tags.map((tag) => (
            <span key={tag} className="project-card__tag">
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
