import PropTypes from "prop-types";

function ButtonCta({ text, link, className }) {
  return (
    <a href={link} className={className}>
      {text}
    </a>
  );
}

ButtonCta.propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default ButtonCta;
