import { NavLink } from "react-router-dom";

export const text = {
  fr: (
    <div>
      Bienvenue sur mon site personnel. Vous pourrez y trouver mon{" "}
      <NavLink to="/cv">CV</NavLink> et quelques liens vers mes{" "}
      <NavLink to="/projects">projets</NavLink>.
    </div>
  ),
  eng: (
    <p>
      Welcome on my personnal site. It contains my{" "}
      <NavLink to="/cv">CV</NavLink> and a few links to some of my{" "}
      <NavLink to="/projects">projects</NavLink>.
    </p>
  ),
};
