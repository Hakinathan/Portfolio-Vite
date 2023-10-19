import { useState } from "react";
import { m } from "framer-motion";
import Toggle from "./Menu/Toggle";
import Items from "./Menu/Items";

import styles from "./Menu.module.css";

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
    label: "CV 📝",
    url: "https://flowcv.com/resume/o7asiufarb",
    target: true,
  },
  {
    label: "Certifications 📜",
    url: "#certifications",
  },
];

const variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
    },
  },
  closed: {
    opacity: 0,
    delay: 0.3,
    y: 75,
    transition: {
      duration: 0.3,
    },
  },
};

function Menu() {
  const [show, setShow] = useState(false);

  return (
    <>
      <Toggle bool={show} setFunction={() => setShow((show) => !show)} />
      <m.nav
        initial="closed"
        className={styles.menu}
        animate={show ? "open" : "closed"}
        variants={variants}
      >
        <Items links={links} />
      </m.nav>
    </>
  );
}

export default Menu;
