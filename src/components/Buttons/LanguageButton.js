import React from "react";
import frLogo from "../../assets/fr.svg";
import ukLogo from "../../assets/uk.svg";

export default class LanguageButton extends React.Component {
  constructor(props) {
    super();
    this.cookies = props.cookies;
    this.state = {
      language: this.cookies.get("lang"),
    };
    this.toCall = props.updateLang;
  }

  changeLanguage() {
    let newLang = this.state.language === "fr" ? "eng" : "fr";
    let newLogo = this.state.language === "fr" ? frLogo : ukLogo;
    this.setState({ language: newLang, logo: newLogo });
    this.toCall(newLang);
    this.cookies.set("lang", newLang, { path: "/" });
  }

  getLanguage() {
    return this.state.language;
  }

  render() {
    return (
      <button
        className={`languageButton ${this.state.language === "fr" ? "eng" : "fr"}`}
        aria-label={this.state.language === "fr" ? "Language selector" : "Sélecteur de langue"}
        onClick={() => this.changeLanguage()}
      ></button>
    );
  }
}
