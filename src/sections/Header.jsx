import profil from "../assets/img/me.webp";
import Button from "../components/buttons/Button";
import planet from "../assets/img/planet.svg";
import rocket from "../assets/img/rocket.svg";
import ButtonCta from "../components/buttons/ButtonCta";
// import CalButton from "../components/buttons/CalButton";

function Header() {
  return (
    <header className="header flex flex--column">
      <img src={planet} alt="Planet" className="header__planet" />
      <img src={rocket} alt="Rocket" className="header__rocket" />
      <img
        src={profil}
        alt="Profil picture of me, Nathan Lemoine"
        className="header__picture"
      />
      <h1 className="header__title">Nathan Lemoine</h1>
      <p className="header__description">
        Je suis un développeur web. Je réalise des sites web aux standards
        actuels. Je mets en place des stratégies d&apos;optimisation de mes
        applications web également afin d&apos;offrir la meilleure expérience
        utilisateur possible.
      </p>
      <div className="header__buttons flex flex--center">
        <Button
          text="Me contacter"
          link="mailto:contact.lemoine.nathan@pm.me"
          className="header__button"
        />
        <ButtonCta
          text="Prendre rendez-vous 📅"
          link="#cta"
          className="header__button--cta"
        />
        {/* <CalButton
          title="Prendre rendez-vous 📅"
          className="header__button--cta"
        /> */}
      </div>
    </header>
  );
}

export default Header;
