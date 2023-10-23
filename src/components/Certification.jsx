import { PropTypes } from "prop-types";

import styles from "./Certification.module.css";
import { PiShareFill } from "react-icons/pi";
import certification from "../assets/svg/certification.svg";

function Certification({ degree }) {
  return (
    <div className={styles.card}>
      <img
        src={certification}
        alt="Icône d'une certification"
        className={styles.icon}
      />
      <div className={styles.text}>
        <h3 className={styles.title}>{degree.name}</h3>
        <p className={styles.platform}>
          {degree.platform} - {degree.year}
        </p>
        <a
          className={styles.link}
          href={degree.link}
          target="_blank"
          rel="noreferrer"
        >
          Voir la certification <PiShareFill />
        </a>
      </div>
    </div>
  );
}

Certification.propTypes = {
  degree: PropTypes.shape({
    name: PropTypes.string.isRequired,
    platform: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
  }).isRequired,
};

export default Certification;
