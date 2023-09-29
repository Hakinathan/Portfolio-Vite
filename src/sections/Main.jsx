import SectionTitle from "../components/SectionTitle";
import Projects from "./Projects";
import Testimonials from "./Testimonials";
import Services from "./Services";
import Reveal from "../components/Reveal";

function Main() {
  return (
    <main className="main">
      <Reveal>
        <SectionTitle title="Mes dernières créations 🧙🏻‍♂️" />
        <Projects />
      </Reveal>
      <Reveal>
        <SectionTitle title="Témoignages 🙏🏻" />
        <Testimonials />
      </Reveal>
      <Reveal>
        <SectionTitle title="Mon service de site web 🤝🏻" />
        <Services />
      </Reveal>
    </main>
  );
}

export default Main;
