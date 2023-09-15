import ServiceCard from "./ServiceCard";
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
    ],
  },
];

function Services() {
  return (
    <section className="services-section">
      <div className="services-section__content grid grid--col-2">
        {services.map((service) => (
          <ServiceCard
            key={service.title}
            title={service.title}
            price={service.price}
            features={service.features}
          />
        ))}
      </div>
    </section>
  );
}

export default Services;
