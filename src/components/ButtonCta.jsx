import PropTypes from "prop-types";

function ButtonCta({ text, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="button_cta"
    >
      {text}
    </a>
  );
}

ButtonCta.propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default ButtonCta;
