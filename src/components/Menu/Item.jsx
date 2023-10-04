import { PropTypes } from "prop-types";

function Item({ link, index }) {
  return (
    <li key={index} className="header__item">
      <a
        href={link.url}
        className={`header__link`}
        {...(link.target && {
          target: "_blank",
          rel: "noopener noreferrer",
        })}
      >
        {link.label}
      </a>
    </li>
  );
}

Item.propTypes = {
  link: PropTypes.shape({
    label: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    target: PropTypes.bool,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default Item;
