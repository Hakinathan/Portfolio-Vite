import Header from "../sections/Header";
import Menu from "../components/Menu";
import Main from "../sections/Main";
import Footer from "../sections/Footer";
import CalButton from "../components/buttons/CalButton";
import {
  MoveOut,
  ScrollContainer,
  ScrollPage,
  Sticky,
  batch,
  Animator,
  Fade,
} from "react-scroll-motion";

function Home() {
  return (
    <>
      <ScrollContainer>
        <ScrollPage>
          <Animator animation={batch(Sticky(), Fade(), MoveOut(0, -50))}>
            <h1 className="title">Bienvenue sur mon site ! 😎</h1>
          </Animator>
        </ScrollPage>
        <>
          <Menu />
          <CalButton />
          <Header />
          <Main />
          <Footer />
        </>
      </ScrollContainer>
    </>
  );
}

export default Home;
