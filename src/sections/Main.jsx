import SectionTitle from "../components/SectionTitle";
import Projects from "./Projects";
import Testimonials from "./Testimonials";
import Services from "./Services";
import Planning from "./Planning";

function Main() {
  return (
    <main className="main">
      <SectionTitle title="Mes dernières créations 🧙🏻‍♂️" />
      <Projects />
      <SectionTitle title="Témoignages 🙏🏻" />
      <Testimonials />
      <SectionTitle title="Mon service de site web 🤝🏻" />
      <Services />
      <SectionTitle title="Parlons-en 📞" />
      <Planning />
    </main>
  );
}

export default Main;
