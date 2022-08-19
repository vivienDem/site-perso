import React from "react";
import { NavLink } from "react-router-dom";
import LanguageButton from "./Buttons/LanguageButton";
import * as data from "../data/navigationData";

export default class Navigation extends React.Component {
  constructor(props) {
    super();
    this.cookies = props.cookies;
    this.state = {
      language: this.cookies.get("lang"),
      logo: this.cookies.get("langLogo"),
      isExpanded: false,
    };
  }

  setLanguage = (lang) => {
    this.props.updateLang(lang);
    this.setState({ language: lang });
  };

  updateExpanded = () => {
    this.setState({ isExpanded: !this.state.isExpanded });
  };

  render() {
    const classes = `${this.state.isExpanded ? " expanded" : ""}`;
    return (
      <div className={`navigation${classes}`}>
        <button className="menu">
          <i
            className="fas fa-bars"
            aria-hidden="true"
            onClick={this.updateExpanded}
          ></i>
        </button>
        <ul>
          <NavLink
            to="/"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <li> {data.home[this.state.language]} </li>
          </NavLink>
          <NavLink
            to="/cv"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <li> Curriculum vitae </li>
          </NavLink>
          <NavLink
            to="/projects"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <li>{data.projects[this.state.language]}</li>
          </NavLink>
          <NavLink
            to="/contact"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <li> Contact </li>
          </NavLink>
        </ul>
        {!this.state.isExpanded && (
          <LanguageButton
            updateLang={this.setLanguage}
            cookies={this.props.cookies}
          ></LanguageButton>
        )}
      </div>
    );
  }
}
