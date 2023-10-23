import Certification from "../components/Certification";
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
          <Certification degree={degree} key={degree.name} />
        ))}
      </div>
    </section>
  );
}

export default Certifications;
