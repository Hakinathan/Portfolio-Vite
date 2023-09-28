import PropTypes from "prop-types";

function ServiceCard({ features }) {
  return (
    <div className="service-card flex flex--column">
      <div className="service-card__features grid grid--col-4">
        {features.map((feature, index) => (
          <div className="service-card__feature flex flex--column" key={index}>
            {feature.icon}
            <p className="service-card__feature--title">{feature.name}</p>
            <p className="service-card__feature--description">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

ServiceCard.propTypes = {
  features: PropTypes.array.isRequired,
};

export default ServiceCard;
