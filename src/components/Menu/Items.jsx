import PropTypes from "prop-types";
import Item from "./Item";

function Items({ links }) {
  return (
    <ul className="header__list flex flex--column">
      {links.map((link, index) => (
        <Item link={link} index={index} key={index} />
      ))}
      <li className="margin-top-2">
        <a href="mailto:contact.nathan.lemoine@pm.me" className="header__btn">
          Contactez-moi ✉
        </a>
      </li>
    </ul>
  );
}

Items.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      target: PropTypes.bool,
    })
  ).isRequired,
};

export default Items;
