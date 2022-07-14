import React from "react";
import Navigation from "../components/Navigation";
import MailButton from "../components/Buttons/MailButton";
import * as data from "../data/contactData";

export default class Contact extends React.Component {
  constructor(props) {
    super();
    this.cookies = props.cookies;
    this.state = {
      language: this.cookies.get("lang"),
    };
  }

  setLanguage = (lang) => {
    this.setState({ language: lang });
  };

  render() {
    return (
      <div className="contactPage">
        <Navigation cookies={this.cookies} updateLang={this.setLanguage} />
        <MailButton
          mailto="viviendemeulenaere@outlook.fr"
          label={data.mail[this.state.language]}
        />
      </div>
    );
  }
}
