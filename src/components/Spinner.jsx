import PropTypes from "prop-types";

function Spinner({ className }) {
  return <div className={`spinner ${className}`} />;
}

Spinner.propTypes = {
  className: PropTypes.string,
};

export default Spinner;
