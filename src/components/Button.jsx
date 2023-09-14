import PropTypes from "prop-types";

function Button({ text, link }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="button">
      {text}
    </a>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default Button;
