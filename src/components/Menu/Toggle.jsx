import Hamburger from "hamburger-react";
import PropTypes from "prop-types";

function Toggle({ bool, setFunction }) {
  return (
    <div className="header__icon">
      <Hamburger
        toggled={bool}
        toggle={setFunction}
        rounded
        label="Icône du menu"
        color="#fff"
        size={24}
      />
    </div>
  );
}

Toggle.propTypes = {
  bool: PropTypes.bool.isRequired,
  setFunction: PropTypes.func.isRequired,
};

export default Toggle;
