import ServiceCard from "../components/cards/ServiceCard";
import { BiShapeTriangle, BiServer } from "react-icons/bi";
import { RiSeoLine } from "react-icons/ri";
import { MdAutoFixHigh } from "react-icons/md";

const services = [
  {
    features: [
      {
        name: "Site sur mesure",
        icon: <BiShapeTriangle className="service-card__feature--icon" />,
        description: "Site adapté à vos besoins et à tous les écrans",
        option: false,
      },
      {
        name: "Optimisé",
        icon: <RiSeoLine className="service-card__feature--icon" />,
        description: "Pour un site rapide et bien référencé",
        option: false,
      },
      {
        name: "Maintenance",
        icon: <MdAutoFixHigh className="service-card__feature--icon" />,
        description: "Mises à jour régulières et à la demande",
        option: true,
      },
      {
        name: "Hébergement",
        icon: <BiServer className="service-card__feature--icon" />,
        description: "Hébergement par mes soins",
        option: true,
      },
    ],
  },
];

function Services() {
  return (
    <section className="services-section" id="services">
      <div className="services-section__content">
        {services.map((service) => (
          <ServiceCard key={service.title} features={service.features} />
        ))}
      </div>
    </section>
  );
}

export default Services;
