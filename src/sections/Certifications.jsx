import certification from "../assets/svg/certification.svg";
import { PiShareFill } from "react-icons/pi";

import styles from "./Certifications.module.css";

const certifications = [
  {
    name: "Site web responsive HTML et CSS",
    platform: "Udemy",
    link: "https://drive.proton.me/urls/KCT6VTDXJG#tECHTdAGIMlR",
    year: 2023,
  },
  {
    name: "JavaScript",
    platform: "Udemy",
    link: "https://drive.proton.me/urls/PG4VB22T3C#BBt7HZsDhq30",
    year: 2023,
  },
  {
    name: "Maven",
    platform: "Orsys",
    link: "https://drive.proton.me/urls/XZJJB9R0E4#HBig6xCHODlq",
    year: 2023,
  },
];

function Certifications() {
  return (
    <section id="certifications">
      <div className={styles.content}>
        {certifications.map((degree) => (
          <div className={styles.card} key={degree.name}>
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
        ))}
      </div>
    </section>
  );
}

export default Certifications;
