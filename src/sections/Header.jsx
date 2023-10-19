import profil from "../assets/img/me.webp";
import planet from "../assets/svg/planet.svg";
import astronaut from "../assets/svg/astronaut.svg";
import ButtonCta from "../components/buttons/ButtonCta";

import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <img src={planet} alt="Planet" className={styles.planet} />
      <img src={astronaut} alt="Planet" className={styles.astronaut} />
      <img
        src={profil}
        alt="Profil picture of me, Nathan Lemoine"
        className={styles.profil}
        height={200}
        width={200}
      />
      <h2 className={styles.title}>Nathan Lemoine</h2>
      <p className={styles.description}>
        Je suis un développeur web <span>diplômé</span> de HELMo. 👨🏻‍🎓 Je prends
        plaisir à créer des sites web et des sites vitrines pour les entreprises
        qui souhaite faire un <span>premier pas</span> dans le monde du web. 🌎
        J&apos;accompagne également les entreprises afin de les soulager de la{" "}
        <span>gestion</span> de leur site web. 🍃
      </p>
      <p className={styles.description}>
        Je mets en place des <span>stratégies</span> d&apos;optimisation afin
        d&apos;obtenir les meilleurs performances pour votre site.⚡
      </p>

      <p className={styles.description}>
        Je mets aussi un accent important sur l&apos;expérience utilisateur pour
        une meilleure <span>fidélisation</span> clients. 🤝
      </p>
      <div className={styles.cta}>
        <ButtonCta
          text="Me contacter"
          link="mailto:contact.lemoine.nathan@pm.me"
        />
      </div>
    </header>
  );
}

export default Header;
