import Header from "../sections/Header";
import Menu from "../components/Menu";
import Main from "../sections/Main";
import Footer from "../sections/Footer";
import CalButton from "../components/buttons/CalButton";
import { LazyMotion } from "framer-motion";

const loadFeatures = () =>
  import("../animations/feature.js").then((res) => res.default);

function Home() {
  return (
    <>
      <Menu />
      <CalButton />
      <Header />
      <LazyMotion features={loadFeatures} strict>
        <Main />
      </LazyMotion>
      <Footer />
    </>
  );
}

export default Home;
