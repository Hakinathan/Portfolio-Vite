import { m, useAnimation, useInView } from "framer-motion";
import PropTypes from "prop-types";
import { useEffect, useRef } from "react";

function Reveal({ children }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (inView) {
      mainControls.start("visible");
    }
  }, [inView, mainControls]);

  return (
    <div className="margin-bottom-lg" ref={ref}>
      <m.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.45 }}
      >
        {children}
      </m.div>
    </div>
  );
}

Reveal.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Reveal;
