import Footer from "../sections/Footer";
import svg from "../assets/svg/404-error.svg";

function NotFound() {
  return (
    <>
      <div className="not-found-container flex flex--column text-center">
        <h1 className="not-found-title">404</h1>
        <p className="not-found-text">La page n&apos;a pas été trouvée 🤔</p>
        <img src={svg} alt="404 svg icon" className="not-found-img" />
      </div>
      <Footer />
    </>
  );
}

export default NotFound;
