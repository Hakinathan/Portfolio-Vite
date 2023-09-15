import SectionTitle from "./SectionTitle";
import Projects from "./Projects";
import Testimonials from "./Testimonials";
import Services from "./Services";

function Main() {
  return (
    <main className="main">
      <SectionTitle title="Mes dernières créations 🧙🏻‍♂️" />
      <Projects />
      <SectionTitle title="Témoignages 🙏🏻" />
      <Testimonials />
      <SectionTitle title="Mes services 🤝🏻" />
      <Services />
    </main>
  );
}

export default Main;
