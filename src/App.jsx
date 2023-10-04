import Home from "./pages/Home";
import { LazyMotion } from "framer-motion";

const loadFeatures = () =>
  import("./animations/feature.js").then((res) => res.default);

function App() {
  return <LazyMotion features={loadFeatures}>{<Home />}</LazyMotion>;
}

export default App;
