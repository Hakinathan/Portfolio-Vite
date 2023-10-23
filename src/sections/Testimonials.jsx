import author1 from "../assets/img/feedback_author-1.webp";
import author2 from "../assets/img/feedback_author-2.webp";
import author3 from "../assets/img/feedback_author-3.webp";
import { useState } from "react";
import { ImQuotesLeft } from "react-icons/im";

import styles from "./Testimonials.module.css";
import Testimonial from "../components/Testimonial";

const feedbacks = [
  {
    name: "Laurent Moor",
    title: "Coach mental, Formateur & Consultant ",
    feedback:
      "Nathan allie des compétences techniques à un sens de la communication très développé. Il travaille consciencieusement. Je lui fais confiance car il a toujours le souci de comprendre le besoin du client et de proposer une solution mesurée.",
    image: author1,
  },
  {
    name: "Samuel Noville",
    title: " Project Manager chez Synchrone",
    feedback:
      "Nathan est une personne volontaire qui a pu le démontrer durant son stage et son TFE réalisé chez Synchrone. Relativement à l'aise dans l'exercice de présentation, il a su mettre en exergue les qualités du travail accompli durant les 15 semaines d'analyse et développement réalisées chez nous.",
    image: author2,
  },
  {
    name: "Florian Genten",
    title: "Développeur chez NRB",
    feedback:
      "Durant notre cursus commun, Nathan a été la personne avec le plus de volonté et de sérieux durant les différents projets que nous avions dû réaliser ensemble.",
    image: author3,
  },
];

function Testimonials() {
  const [currentFeedback, setCurrentFeedback] = useState(0);

  const handleFeedbackChange = (index) => {
    setCurrentFeedback(index);
  };

  return (
    <section id="testimonials">
      <div className={styles.testimonials}>
        <div className={styles.content}>
          <ImQuotesLeft className={styles.icon} />
          <p className={styles.feedback}>
            {feedbacks[currentFeedback].feedback}
          </p>
        </div>
        <div className={styles.authors}>
          {feedbacks.map((feedback, index) => (
            <Testimonial
              onClick={handleFeedbackChange}
              current={currentFeedback}
              index={index}
              feedback={feedback}
              key={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
