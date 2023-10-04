import Header from "../sections/Header";
import Menu from "../components/Menu";
import Main from "../sections/Main";
import Footer from "../sections/Footer";
import CalButton from "../components/buttons/CalButton";

function Home() {
  return (
    <>
      <Menu />
      <CalButton />
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default Home;
