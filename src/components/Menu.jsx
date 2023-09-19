import { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import { IconContext } from "react-icons";

const links = [
  {
    label: "Mes créations 🚀",
    url: "#creations",
  },
  {
    label: "Témoignages 🙏",
    url: "#testimonials",
  },
  {
    label: "Services 💻",
    url: "#services",
  },
  {
    label: "Github 📈",
    url: "#github",
  },
  {
    label: "Parlons-en 📞",
    url: "#cta",
  },
  {
    label: "CV 📝",
    url: "https://flowcv.com/resume/o7asiufarb",
    target: true,
  },
];

function Menu() {
  const [show, setShow] = useState(false);
  return (
    <>
      <button
        className="header__icon"
        onClick={() => setShow(!show)}
        aria-label="Icône du menu"
      >
        <IconContext.Provider value={{ className: "header__icon--svg" }}>
          {show ? <RxCross2 /> : <BiMenuAltRight />}
        </IconContext.Provider>
      </button>
      {show && (
        <nav className="header__nav">
          <ul className="header__list flex flex--column">
            {links.map((link, index) => (
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
            ))}
            <li className="margin-top-2">
              <a
                href="mailto:contact.nathan.lemoine@pm.me"
                className="header__btn"
              >
                Contactez-moi ✉
              </a>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
}

export default Menu;
