import React from "react";
import Navigation from "../components/Navigation";
import MailButton from "../components/Buttons/MailButton";
import * as data from "../data/contactData";
import GitHubButton from "../components/Buttons/GitHubButton";

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

        <div className="content">
          <div className="contactMe">
            <h1>{data.contactMe[this.state.language]}</h1>
          </div>

          <div className="links">
            <ul>
              <li>
                <MailButton
                  mailto="viviendemeulenaere@free.fr"
                  label="viviendemeulenaere@free.fr"
                />
              </li>
              <li>
                <GitHubButton />
              </li>
            </ul>
          </div>

        </div>



      </div>
    );
  }
}
