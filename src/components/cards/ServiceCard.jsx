import PropTypes from "prop-types";

function ServiceCard({ title, features }) {
  return (
    <div className="service-card flex flex--column">
      <h3 className="service-card__title text-center">{title}</h3>
      <div className="service-card__features">
        {features.map((feature, index) => (
          <p key={index} className="service-card__feature flex flex--center">
            {feature.icon} {feature.name}
          </p>
        ))}
      </div>
      <div className="service-card__button-container flex flex--center">
        <a href="#" className="service-card__button">
          Je commande 💪🏻
        </a>
      </div>
    </div>
  );
}

ServiceCard.propTypes = {
  title: PropTypes.string.isRequired,
  features: PropTypes.array.isRequired,
};

export default ServiceCard;
