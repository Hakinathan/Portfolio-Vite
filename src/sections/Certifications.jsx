import certification from "../assets/svg/certification.svg";
import { PiShareFill } from "react-icons/pi";

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
    <section className="certifications-section" id="certifications">
      <div className="certifications-section__content flex flex--column gap-lg">
        {certifications.map((degree) => (
          <div className="certifications-section__card flex" key={degree.name}>
            <img
              src={certification}
              alt="Icône d'une certification"
              className="certifications-section__card--icon"
            />
            <div className="certifications-section__card--text flex flex--column">
              <h3 className="certifications-section__card--title">
                {degree.name}
              </h3>
              <p className="certifications-section__card--platform">
                {degree.platform} - {degree.year}
              </p>
              <a
                className="certifications-section__card--link flex"
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
