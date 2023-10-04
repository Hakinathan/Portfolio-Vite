import { useState } from "react";
import { m } from "framer-motion";
import Toggle from "./Menu/Toggle";
import Items from "./Menu/Items";

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
];

const variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    opacity: 0,
    y: 50,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

function Menu() {
  const [show, setShow] = useState(false);

  return (
    <>
      <Toggle bool={show} setFunction={() => setShow((show) => !show)} />
      <m.nav
        className="header__nav"
        animate={show ? "open" : "closed"}
        variants={variants}
      >
        <Items links={links} />
      </m.nav>
    </>
  );
}

export default Menu;
