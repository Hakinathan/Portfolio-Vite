import profil from "../assets/img/me.webp";
import planet from "../assets/svg/planet.svg";
import astronaut from "../assets/svg/astronaut.svg";
import ButtonCta from "../components/buttons/ButtonCta";

function Header() {
  return (
    <header className="header flex flex--column flex--center">
      <img src={planet} alt="Planet" className="header__planet" />
      <img src={astronaut} alt="Planet" className="header__astronaut" />
      <img
        src={profil}
        alt="Profil picture of me, Nathan Lemoine"
        className="header__picture"
        height={200}
        width={200}
      />
      <h2 className="header__title">Nathan Lemoine</h2>
      <p className="header__description">
        Je suis un développeur web <span>diplômé</span> de HELMo. 👨🏻‍🎓 Je prends
        plaisir à créer des sites web et des sites vitrines pour les entreprises
        qui souhaite faire un <span>premier pas</span> dans le monde du web. 🌎
        J&apos;accompagne également les entreprises afin de les soulager de la{" "}
        <span>gestion</span> de leur site web. 🍃
      </p>
      <p className="header__description">
        Je mets en place des <span>stratégies</span> d&apos;optimisation afin
        d&apos;obtenir les meilleurs performances pour votre site.⚡
      </p>

      <p className="header__description">
        Je mets aussi un accent important sur l&apos;expérience utilisateur pour
        une meilleure <span>fidélisation</span> clients. 🤝
      </p>
      <div className="header__buttons flex flex--center">
        <ButtonCta
          text="Me contacter"
          link="mailto:contact.lemoine.nathan@pm.me"
          className="header__button"
        />
      </div>
    </header>
  );
}

export default Header;
