import ServiceCard from "../components/cards/ServiceCard";
import { BsCheck2Circle, BsInfoCircle } from "react-icons/bs";

const services = [
  {
    title: "Site vitrine",
    price: 400,
    features: [
      {
        name: "Site sur mesure",
        icon: <BsCheck2Circle />,
      },
      {
        name: "Design moderne",
        icon: <BsCheck2Circle />,
      },
      {
        name: "Responsive",
        icon: <BsCheck2Circle />,
      },
      {
        name: "Optimisé SEO",
        icon: <BsCheck2Circle />,
      },
      {
        name: "Maintenance possible",
        icon: <BsInfoCircle />,
      },
      {
        name: "Hébergement possible",
        icon: <BsInfoCircle />,
      },
    ],
  },
];

function Services() {
  return (
    <section className="services-section" id="services">
      <div className="services-section__content grid">
        {services.map((service) => (
          <ServiceCard
            key={service.title}
            title={service.title}
            features={service.features}
          />
        ))}
        {/* <div className="services-section__cta flex flex--column">
          <p className="services-section__cta-text">
            Envie d&apos;en savoir plus ? Contactez-moi pour un appel dévouverte
            !
          </p>
          <Button
            text="Rendez-vous découverte 🔭"
            link="https://cal.com/lusty9149/session-decouverte-🔭"
            className="services-section__cta-button"
          />
        </div> */}
      </div>
    </section>
  );
}

export default Services;
