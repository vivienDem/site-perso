import React from "react";
import { NavLink } from "react-router-dom";
import LanguageButton from "./Buttons/LanguageButton";
import * as data from "../data/navigationData";

const mobileBreakPoint = 767;

export default class Navigation extends React.Component {
  constructor(props) {
    super();
    this.cookies = props.cookies;
    this.state = {
      language: this.cookies.get("lang"),
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

  checkExpanded = () => {
    if (window.innerWidth >= mobileBreakPoint) {
      this.setState({ isExpanded: false });
    }
  }


  render() {
    window.onresize = this.checkExpanded;
    const classes = `${this.state.isExpanded ? " expanded" : ""}`;
    return (
      <div className={`navigation${classes}`} >
        <button className="menu">
          <i
            className={this.state.isExpanded ? "fa fa-window-close" : "fas fa-bars"}
            aria-hidden="true"
            onClick={this.updateExpanded}
          ></i>
        </button>
        <ul>
          {data.pages.map((page, index) => {
            return <li key={index}
              onClick={() => this.setState({ isExpanded: false })}>
              <NavLink
                to={page}
                className={(nav) => nav.isActive ? "nav nav-active" : "nav"}
              >
                {data.pagesName[index][this.state.language]}
              </NavLink></li>
          })}
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
