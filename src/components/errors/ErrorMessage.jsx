import PropTypes from "prop-types";

function ErrorMessage({ error }) {
  return (
    <div className="error-message">
      <p className="error-message__text">{error} ❌</p>
    </div>
  );
}

ErrorMessage.propTypes = {
  error: PropTypes.string.isRequired,
};

export default ErrorMessage;
