import SectionTitle from "./SectionTitle";
import Projects from "./Projects";
import Testimonials from "./Testimonials";

function Main() {
  return (
    <main className="main">
      <SectionTitle title="Mes dernières créations 🧙🏻‍♂️" />
      <Projects />
      <SectionTitle title="Témoignages 🙏🏻" />
      <Testimonials />
    </main>
  );
}

export default Main;
