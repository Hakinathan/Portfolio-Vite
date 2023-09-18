import PropTypes from "prop-types";

function Button({ text, link, className }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {text}
    </a>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default Button;
