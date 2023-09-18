import { BiLogoLinkedin } from "react-icons/bi";
import { FiTwitter, FiMail, FiGithub } from "react-icons/fi";

const socialLogos = [
  {
    link: "https://www.linkedin.com/in/nathan-lemoine-dev/",
    logo: <BiLogoLinkedin />,
  },
  {
    link: "https://twitter.com/NathouL22",
    logo: <FiTwitter />,
  },
  {
    link: "mailto:contact.nathan.lemoine@pm.me",
    logo: <FiMail />,
  },
  {
    link: "https://github.com/Hakinathan",
    logo: <FiGithub />,
  },
];

function Footer() {
  return (
    <footer className="footer text-center flex flex--column">
      <div className="footer__copy flex flex--column">
        <p className="footer__text">
          Nathan Lemoine - Tous droits réservés - &copy;
          {new Date().getFullYear()}
        </p>
        <p className="footer__text">
          Numéro BCE : <strong>0804.552.840</strong>
        </p>
      </div>
      <div className="footer__links flex">
        {socialLogos.map((logo, index) => (
          <a
            href={logo.link}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
            className="footer__link"
          >
            {logo.logo}
          </a>
        ))}
      </div>
      <p className="footer__text-end"> Made with ♥ by me with React & Vite</p>
    </footer>
  );
}

export default Footer;
