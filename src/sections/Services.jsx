import ServiceCard from "../components/cards/ServiceCard";
import { BiShapeTriangle, BiServer } from "react-icons/bi";
import { RiSeoLine } from "react-icons/ri";
import { MdAutoFixHigh } from "react-icons/md";

import styles from "./Services.module.css";

const services = [
  {
    features: [
      {
        name: "Site sur mesure",
        icon: <BiShapeTriangle className={styles.icon} />,
        description: "Site adapté à vos besoins et à tous les écrans",
      },
      {
        name: "Optimisé",
        icon: <RiSeoLine className={styles.icon} />,
        description: "Pour un site rapide et bien référencé",
      },
      {
        name: "Maintenance",
        icon: <MdAutoFixHigh className={styles.icon} />,
        description: "Mises à jour régulières et à la demande",
      },
      {
        name: "Hébergement",
        icon: <BiServer className={styles.icon} />,
        description: "Hébergement par mes soins",
      },
    ],
  },
];

function Services() {
  return (
    <section id="services">
      <div className={styles.services}>
        {services.map((service) => (
          <ServiceCard key={service.title} features={service.features} />
        ))}
      </div>
    </section>
  );
}

export default Services;
