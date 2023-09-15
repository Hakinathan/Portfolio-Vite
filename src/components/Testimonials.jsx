import author1 from "../assets/img/feedback_author-1.jpg";
import author2 from "../assets/img/feedback_author-2.jpg";
import author3 from "../assets/img/feedback_author-3.jpg";
import { useState } from "react";
import { ImQuotesLeft } from "react-icons/im";

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
    <section className="testimonials" id="testimonials">
      <div className="testimonials__container">
        <div className="testimonials__content">
          <ImQuotesLeft className="testimonials__icon" />
          <p className="testimonials__feedback">
            {feedbacks[currentFeedback].feedback}
          </p>
        </div>
        <div className="testimonials__authors flex flex--between">
          {feedbacks.map((feedback, index) => (
            <div
              className={`testimonials__author ${
                index === currentFeedback ? "testimonials__author--active" : ""
              }`}
              key={index}
              onClick={() => handleFeedbackChange(index)}
            >
              <img
                className="testimonials__author-image"
                src={feedback.image}
                alt={feedback.name}
              />
              <h3 className="testimonials__author-name">{feedback.name}</h3>
              <p className="testimonials__author-title">{feedback.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
